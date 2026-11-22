[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/blacktokyo96/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/blacktokyo96/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# The World in One Day — Sunday 22 November 2026

A newspaper front page with nine stories, led by 186 drones over Ukraine, COP31 in Antalya, and the Sparta II fire in the Gulf of Finland. The supplied front page is preserved as-is, with only Lanczos downscaling to 1024 × 1024 and JPEG encoding at quality 88. The JPEG is named `entry.png` as required by the bounty.

## Stories covered

1. **186 drones in one night** — Russia's overnight assault on Ukraine.
2. **Climate talks on the brink** — COP31 in Antalya runs into overtime.
3. **Baltic war alarm** — the Sparta II fire in the Gulf of Finland.
4. **EU–Indonesia trade deal** — 98.5% of tariffs to go after a decade of talks.
5. **Indonesia factory fire** — the Serang fire leaves at least three dead and dozens missing.
6. **AI chip row deepens** — US officials scrutinize Nvidia sales to China.
7. **Verstappen wins Vegas GP** — Formula 1 drama under the Las Vegas lights.
8. **Kenya internet law** — privacy concerns grow.
9. **Kansas City Current champions** — a 2–1 win over Washington Spirit in the NWSL final.

## Run it

Use Node.js 22 with TypeScript execution enabled (Node 22.18 or later runs these commands directly). No dependencies or network access are needed.

```sh
node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program copies the bundled image to `/output/entry.png` by default, validates its JPEG signature, and verifies the written file's SHA-256 against the bundled image.

[View the bounty](https://make.fun/bounty/news-image-20261122)
