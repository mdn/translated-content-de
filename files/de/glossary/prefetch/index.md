---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Prefetching bezieht sich auf die Praxis, Dokumente oder Teilressourcen spekulativ im Hintergrund abzurufen, für Seiten, zu denen der Benutzer wahrscheinlich in naher Zukunft navigieren wird. Dies kann die Ladezeit für die vorab abgerufene Seite erheblich reduzieren, wenn der Benutzer sich tatsächlich entscheidet, zu ihr zu navigieren. Prefetching könnte beispielsweise verwendet werden, um die Seite abzurufen, die mit einem "Weiter"-Button verlinkt ist, oder deren Teilressourcen, oder ein Link-Popup, über das ein Benutzer schwebt, oder Suchergebnisse.

### Ressourcen-Prefetching

Ressourcen sollten basierend darauf vorab abgerufen werden, wie wahrscheinlich es ist, dass sie in einer zukünftigen Navigation benötigt werden. Browser können dies automatisch für einige Ressourcen ableiten, wie zum Beispiel die aktuelle URL in der Adressleiste.

Dies kann mit [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) durchgeführt werden (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokument-Prefetches für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

### Dokument-Prefetching

Entwickler können dem Browser auf verschiedene Arten Hinweise auf Navigationen geben, die vorab abgerufen werden sollten:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prefetch:

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

Die Speculation Rules API behandelt Dokument-Prefetches für Navigationen viel besser als `<link rel="prefetch">`; erstere wurde speziell für diesen Zweck entwickelt, während letztere eine Reihe von Einschränkungen hat; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) für Details.

### DNS-Prefetching

[DNS-Prefetching](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) löst Domainnamen im Voraus auf und beschleunigt die Ladezeiten, indem es die mit der Domainabfrage zum Anforderungszeitpunkt verbundene Zeit reduziert.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender", "Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
