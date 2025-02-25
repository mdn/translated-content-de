---
title: Prerender
slug: Glossary/Prerender
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

Prerendering bezieht sich auf die Praxis des spekulativen {{Glossary("prefetch", "Preloadings")}} und _Renderns_ von Seiten, zu denen der Benutzer wahrscheinlich in naher Zukunft navigieren wird (der Browser rendert die Seite im Hintergrund in einem im Wesentlichen unsichtbaren separaten Tab). Prerendering umfasst das Herunterladen von Subressourcen eines Dokuments und das Ausführen des zugehörigen JavaScripts.

Falls der Benutzer sich dann entscheidet, zu der Seite zu navigieren, kann die Anzeige ihres Inhalts nahezu sofort erfolgen.

Prerendering könnte zum Beispiel verwendet werden, um die Seitenressourcen, die durch einen "Weiter"-Button verlinkt sind, ein Popup-Link, über den ein Benutzer schwebt, oder das wahrscheinliche Seitendziel der URL, die in die Adressleiste eingegeben wird, abzurufen. Die folgenden [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) könnten im Head eines Dokuments enthalten sein, um dem Browser einen Hinweis zu geben, dass er `next.html` und `next2.html` rendern sollte, da beide vernünftigerweise Ziele der nächsten Navigation sein könnten:

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

Prerendering führt zu schnelleren Anzeigezeiten als Preloading und somit zu einer besseren Benutzererfahrung, allerdings auf Kosten eines höheren Ressourcenverbrauchs.

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prefetch", "Prefetch")}}
- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) auf developer.chrome.com
- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
