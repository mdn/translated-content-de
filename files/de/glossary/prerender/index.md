---
title: Prerender
slug: Glossary/Prerender
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{GlossarySidebar}}

Prerendering bezieht sich auf die Praxis des spekulativen [Prefetching](/de/docs/Glossary/prefetch) und _Rendrings_ von Seiten, zu denen der Benutzer in naher Zukunft wahrscheinlich navigieren wird (der Browser rendert die Seite im Hintergrund in einem effektiv unsichtbaren separaten Tab). Prerendering umfasst das Herunterladen von Teilressourcen eines Dokuments und das Ausführen zugehöriger JavaScript-Skripte.

Wenn der Benutzer sich dann entscheidet, zu der Seite zu navigieren, kann die Anzeige ihres Inhalts nahezu sofort erfolgen.

Prerendering könnte beispielsweise verwendet werden, um die Ressourcen der Seite abzurufen, die durch einen „Weiter“-Button verlinkt sind, oder ein Link-Popup, über das der Benutzer schwebt, oder das voraussichtliche Ziel der URL, die in die Adressleiste eingegeben wird. Die folgenden [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) könnten im Kopf eines Dokuments aufgenommen werden, um dem Browser einen Hinweis darauf zu geben, dass er `next.html` und `next2.html` prerendern sollte, da beide vernünftigerweise ein Ziel der nächsten Navigation sein könnten:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

Prerendering führt zu schnelleren Anzeiteiten als Prefetching und somit zu einer besseren Benutzererfahrung, auf Kosten eines höheren Ressourcenverbrauchs.

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
- Verwandte Glossarbegriffe:
  - [Prefetch](/de/docs/Glossary/Prefetch)
- [Seiten in Chrome prärendern für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) auf developer.chrome.com
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
