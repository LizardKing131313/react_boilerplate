SHELL := pwsh.exe
.SHELLFLAGS := -NoProfile -Command

# --- Directories ---
DIST_DIR := dist
COVERAGE_DIR := coverage

# --- Default target ---
.DEFAULT_GOAL := help

# --- Targets ---
.PHONY: install husky dev build preview lint typecheck test e2e format ci clean help

## Install all dependencies
install:
	pnpm install

## Add pre commit
husky:
	pnpm prepare

## Run dev server
dev:
	pnpm dev

## Build project
build:
	pnpm build

## Preview build
preview:
	pnpm preview

## Run ESLint
lint:
	pnpm lint

## Run TypeScript typecheck
typecheck:
	pnpm typecheck
	pnpm typecheck:test
	pnpm typecheck:e2e

## Run unit tests
test:
	pnpm test

## Run end-to-end tests
e2e:
	pnpm e2e

## Generate coverage badge
badge: test
	pnpm badge

## Format code
format:
	pnpm format

## CI pipeline (install → lint → typecheck → test)
ci:
	pnpm install --frozen-lockfile
	$(MAKE) lint
	$(MAKE) typecheck
	$(MAKE) badge
	$(MAKE) e2e

## Clean build artifacts (cross-platform)
clean:
	powershell -Command "Remove-Item -Recurse -Force node_modules, $(DIST_DIR), $(COVERAGE_DIR), playwright-report, test-results -ErrorAction SilentlyContinue"

## Show this help
help:
	@echo ""
	@echo "Available targets:"
	@grep -E '^##' Makefile | sed -E 's/^## (.*)/  \1/' | awk 'NR%2{printf "%-20s", $$0; next}1'
	@echo ""
