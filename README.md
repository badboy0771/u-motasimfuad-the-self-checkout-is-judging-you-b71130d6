# The Self-Checkout Is Judging You

![make.fun](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)
![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/badboy0771/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/rank.svg)
![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/badboy0771/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/reward.svg)

A single funny remark from a judgmental self-checkout machine, built for the
[make.fun bounty of the same name](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6).
The brief: one line, at most 200 characters, the sort of thing the till would
say to a shopper buying twelve yoghurts and nothing else — smug, petty about
the basket, no padding.

## The entry

> Twelve yoghurts and a single banana. I have scanned your entire personality, and it expires Friday.

99 characters, one line. The joke lands on the machine treating the shopper's
whole personality as just another scanned item — and like the yoghurt, it has
an expiry date, and that date is Friday.

## How it works

`main.ts` (Node 22, no dependencies) builds the line, checks it against the
competition gate itself — 1 to 200 characters, not blank, exactly one line —
and writes it to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
