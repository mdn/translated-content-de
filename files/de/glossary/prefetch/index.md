---
title: Prefetch
slug: Glossary/Prefetch
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Prefetching bezieht sich auf die Praxis, Dokumente oder Subressourcen im Hintergrund spekulativ abzurufen für Seiten, zu denen der Benutzer in naher Zukunft _wahrscheinlich_ navigieren wird. Dies kann die Ladezeit der vorab abgerufenen Seite erheblich reduzieren, wenn der Benutzer sich dafür entscheidet, dorthin zu navigieren. Prefetching kann beispielsweise verwendet werden, um die Seite abzurufen, die durch einen "Weiter"-Button verlinkt ist, oder deren Subressourcen, oder ein Link-Popup, über das ein Benutzer schwebt, oder Suchergebnisse.

### Ressourcen-Vorababruf

Ressourcen sollten basierend darauf vorab abgerufen werden, wie wahrscheinlich es ist, dass sie bei einer zukünftigen Navigation benötigt werden. Browser können dies für einige Ressourcen automatisch ableiten, wie z.B. die aktuelle URL in der Adressleiste.

Dies kann unter Verwendung von [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) erfolgen (die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) behandelt nur Dokumentvorabrufe für Navigationen):

```html
<link rel="prefetch" href="next.html" />
```

### Dokumentvorabruf

Entwickler können dem Browser Hinweise geben, welche Navigationen vorab abgerufen werden sollten, und dies auf verschiedene Weise:

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch):

```html
<link rel="prefetch" href="next.html" />
```

[Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Vorababruf:

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

Die Speculation Rules API behandelt Dokumentvorabrufe für Navigationen wesentlich besser als `<link rel="prefetch">`; erstere wurde speziell für diesen Zweck entwickelt, während letztere eine Reihe von Einschränkungen aufweist; siehe [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) für Details.

### DNS-Vorababruf

[DNS-Vorababruf](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) löst Domainnamen im Voraus auf, was die Ladezeiten beschleunigt, indem die mit der Domainabfragezeit verbundenen Zeiten verkürzt werden.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prerender", "Prerender")}}
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
