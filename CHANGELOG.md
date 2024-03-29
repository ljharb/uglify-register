# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.1](https://github.com/ljharb/uglify-register/compare/v1.0.0...v1.0.1) - 2017-12-28

### Commits

- [Tests] on latest node minors; use `nvm install-latest-npm` to ensure newer npm doesn’t break older node [`f3dfc92`](https://github.com/ljharb/uglify-register/commit/f3dfc92035b7c6f4081a87a548f3e94c47bfa555)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `nyc`, `tape` [`a9aab78`](https://github.com/ljharb/uglify-register/commit/a9aab788913aea89e62e6e2f4b97198658503777)
- [Dev Deps] downgrade `nyc` to v10, to retain old node compat. [`0d8cf90`](https://github.com/ljharb/uglify-register/commit/0d8cf90585e28f07061931abd4804137d745e0d4)
- [Tests] on `node` `v9`; pin included builds to LTS. [`a1232a6`](https://github.com/ljharb/uglify-register/commit/a1232a6cb18104c279b1ec4d67c60eb0da13038c)
- [Dev Deps] update `nsp`, `nyc`, `eslint` [`6ef382c`](https://github.com/ljharb/uglify-register/commit/6ef382c733039baa6f2ebdd56a25ab395c8f0e10)
- [Dev Deps] update `eslint`, `nsp` [`bb9a4d5`](https://github.com/ljharb/uglify-register/commit/bb9a4d55f2f2e9c0310ff332eec94e65cf45ba4f)
- [Fix] uglify v3.3 re-added .parse [`d90a4bd`](https://github.com/ljharb/uglify-register/commit/d90a4bd7f500ba21aa64b6732b5f0e3a2f15f495)
- [Dev Deps] update `eslint` [`27fcf48`](https://github.com/ljharb/uglify-register/commit/27fcf4809e4e36fbf22116da10d10298c21e59c2)
- [Tests] restore uglify version testing, broken in f3dfc92035b7c6f4081a87a548f3e94c47bfa555 [`dccbe9f`](https://github.com/ljharb/uglify-register/commit/dccbe9f07b6326af6637b917a6d88db24c48627d)

## v1.0.0 - 2017-07-21

### Commits

- Dotfiles [`2ac12bd`](https://github.com/ljharb/uglify-register/commit/2ac12bd23e0a070adb9eafe2ac4ba4f61114f62e)
- Tests. [`31de59d`](https://github.com/ljharb/uglify-register/commit/31de59dc6425834235c8fb893e57d1812293dd15)
- [Tests] remove non-latest minors. [`90f4608`](https://github.com/ljharb/uglify-register/commit/90f46087478965fa2570a9516ba9b00caaac7b8d)
- Add support for v2 of `uglify-js` [`9d62695`](https://github.com/ljharb/uglify-register/commit/9d6269514a0eca5fad4adf17ad55cd7c8f7d47fd)
- Initial commit [`e29eaa2`](https://github.com/ljharb/uglify-register/commit/e29eaa2e80913f64da5b8a427e852c1f2438a528)
- Implementation. [`37bb957`](https://github.com/ljharb/uglify-register/commit/37bb957f093594bcb8b13624151574044f4edb88)
- package.json [`42f9e7d`](https://github.com/ljharb/uglify-register/commit/42f9e7db72f08c8f8dfd40724ff6e75d9e39887b)
- [Tests] add linting [`80ee211`](https://github.com/ljharb/uglify-register/commit/80ee211c6b85c78ddfb95b93fafae42ec56840f8)
- Only apps should have lockfiles [`99e94be`](https://github.com/ljharb/uglify-register/commit/99e94bebe90c73801e5a5d39a3850c24c67c171a)
- Add `uglify-js` as a peer dep as well, so you can determine your own version. [`4d625b9`](https://github.com/ljharb/uglify-register/commit/4d625b959d88e03c320e488f509480f269cc8ce8)
- Add safe-publish-latest [`0e2010c`](https://github.com/ljharb/uglify-register/commit/0e2010cdf95df0e166e48e1e60032676a0eb32ab)
