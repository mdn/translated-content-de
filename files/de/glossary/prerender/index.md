---
title: Prerendering
slug: Glossary/Prerender
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Prerendering bezieht sich auf die Praxis, Seiten spekulativ zu {{Glossary("prefetch", "prefetchen")}} und zu _rendern_, zu denen der Benutzer wahrscheinlich in naher Zukunft navigieren wird (der Browser rendert die Seite im Hintergrund in einem faktisch unsichtbaren separaten Tab). Prerendering umfasst das Herunterladen der Subressourcen eines Dokuments und das Ausführen des zugehörigen JavaScripts.

Wenn der Benutzer sich dann entscheidet, zu der Seite zu navigieren, kann die Anzeige ihres Inhalts nahezu sofort erfolgen.

Prerendering könnte zum Beispiel verwendet werden, um die Seitenressourcen abzurufen, die mit einem "Weiter"-Button verlinkt sind, oder ein Popup-Link, über das ein Benutzer fährt, oder das wahrscheinlich angezeigte Ziel der URL, die in die Adressleiste eingegeben wird. Die folgenden [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) könnten in den Kopf eines Dokuments aufgenommen werden, um dem Browser einen Hinweis zu geben, dass er `next.html` und `next2.html` prerendern sollte, da beide vernünftigerweise Ziele der nächsten Navigation sein könnten:

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

Prerendering führt zu einer schnelleren Anzeigegeschwindigkeit als Prefetching und somit zu einer besseren Benutzererfahrung, jedoch auf Kosten eines höheren Ressourcenverbrauchs.

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
- Verwandte Glossarbegriffe:
  - {{Glossary("Prefetch", "Prefetch")}}
- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) auf developer.chrome.com
- [Spekulationsregel-API](/de/docs/Web/API/Speculation_Rules_API)
