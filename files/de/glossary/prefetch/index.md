---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Prefetching bezieht sich auf die Praxis, Dokumente oder Subressourcen spekulativ im Hintergrund abzurufen für Seiten, zu denen der Benutzer _wahrscheinlich_ in naher Zukunft navigieren wird. Dies kann die Ladezeit für die vorab abgerufene Seite erheblich verkürzen, falls der Benutzer sich entscheidet, zu dieser zu navigieren. Prefetching könnte beispielsweise verwendet werden, um die Seite abzurufen, die von einem "Weiter"-Button verlinkt ist, oder deren Subressourcen, oder ein Link-Popup, über das ein Benutzer fährt, oder Suchergebnisse.

## Ressourcen-Prefetching

Ressourcen sollten basierend darauf vorab abgerufen werden, wie wahrscheinlich es ist, dass sie in einer zukünftigen Navigation benötigt werden. Browser können dies automatisch für einige Ressourcen ableiten, wie die aktuelle URL in der Adressleiste.

Dies kann mit [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) erreicht werden (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokumentvorabrufe für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

## Dokumenten-Prefetching

Entwickler können dem Browser Hinweise auf Navigationen geben, die vorab abgerufen werden sollen, auf verschiedene Weisen:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

Die Speculation Rules API behandelt das Dokument-Prefetching für Navigationen viel besser als `<link rel="prefetch">`; ersteres wurde speziell für diesen Zweck entwickelt, während letzteres eine Reihe von Einschränkungen hat; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) für Details.

## DNS-Prefetching

[DNS-Prefetching](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) löst Domain-Namen im Voraus auf und beschleunigt die Ladezeiten, indem es die mit der Domänensuche zum Zeitpunkt der Anfrage verbundene Zeit reduziert.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender", "Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
