---
title: Replay-Angriff
slug: Glossary/Replay_attack
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

In der Web-Sicherheit tritt ein _Replay-Angriff_ auf, wenn ein Angreifer eine zuvor gesendete Nachricht abfängt und sie später erneut sendet, um die gleichen Anmeldedaten wie die ursprüngliche Nachricht zu erhalten, möglicherweise mit einer anderen Nutzlast oder Anweisung.

Replay-Angriffe können verhindert werden, indem jeder Nachricht ein eindeutiger, nur einmal verwendbarer Bezeichner beigefügt wird, den der Empfänger verwenden kann, um die Authentizität der Übertragung zu überprüfen. Dieser Bezeichner kann die Form eines Sitzungstokens oder einer "Nummer, die nur einmal verwendet wird" ({{Glossary("Nonce", "Nonce")}}) annehmen.

## Siehe auch

- [Replay-Angriff](https://en.wikipedia.org/wiki/Replay_attack) auf Wikipedia.
