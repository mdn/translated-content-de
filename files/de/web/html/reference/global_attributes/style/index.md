---
title: Globales HTML-Attribut `style`
short-title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`style`** enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden. Es wird empfohlen, Stile in einer oder mehreren separaten Dateien zu definieren. Dieses Attribut und das Element {{HTMLElement("style")}} dienen hauptsächlich dazu, Stile schnell festzulegen, beispielsweise zu Testzwecken.

> [!NOTE]
> Dieses Attribut darf nicht verwendet werden, um semantische Informationen zu vermitteln. Auch wenn alle Stile entfernt werden, sollte eine Seite semantisch korrekt bleiben. In der Regel sollte es nicht verwendet werden, um irrelevante Informationen auszublenden; verwenden Sie dazu das Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden).

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
