---
title: HTML-Attribut style (global)
short-title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`style`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Es wird empfohlen, Stile in einer separaten Datei oder in separaten Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dem Zweck, schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> Dieses Attribut sollte nicht verwendet werden, um semantische Informationen zu vermitteln. Auch wenn alle Stile entfernt werden, sollte eine Seite semantisch korrekt bleiben. Typischerweise sollte es nicht verwendet werden, um irrelevante Informationen zu verbergen; dies sollte mithilfe des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
