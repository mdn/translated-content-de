---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Prefetching bezieht sich auf die Praxis, Dokumente oder Subressourcen spekulativ im Hintergrund zu laden, für Seiten, die der Benutzer wahrscheinlich in naher Zukunft besuchen wird. Dies kann die Ladezeit der vorgeladenen Seite erheblich reduzieren, wenn der Benutzer sich entscheidet, dorthin zu navigieren. Prefetching könnte beispielsweise verwendet werden, um die Seite zu laden, die mit einem "Weiter"-Button verknüpft ist, oder ihre Subressourcen, oder ein Link-Popup, über das ein Benutzer fährt, oder Suchergebnisse.

### Ressourcen-Prefetching

Ressourcen sollten basierend darauf vorgeladen werden, wie wahrscheinlich es ist, dass sie in einer zukünftigen Navigation benötigt werden. Browser können dies automatisch für einige Ressourcen ableiten, wie z.B. die aktuelle URL in der Adressleiste.

Dies kann mithilfe von [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) durchgeführt werden (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokument-Prefetches für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

### Dokument-Prefetching

Entwickler können dem Browser Hinweise zu Navigationen geben, die vorgeladen werden sollten, auf unterschiedliche Weise:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch):

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

Die Speculation Rules API behandelt Dokument-Prefetches für Navigationen viel besser als `<link rel="prefetch">`; die erstere wurde speziell für diesen Zweck entwickelt, während die letztere eine Reihe von Einschränkungen hat; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) für Details.

### DNS-Prefetching

[DNS-Prefetching](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) löst Domainnamen im Voraus auf und beschleunigt die Ladezeiten, indem es die mit der Domänensuche zur Anforderungszeit verbundene Zeit reduziert.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender", "Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
