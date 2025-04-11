---
title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`style`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält [CSS](/de/docs/Web/CSS)-Stilangaben, die auf das Element angewendet werden sollen. Beachten Sie, dass es empfohlen wird, Stile in einer separaten Datei oder in mehreren Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dem Zweck, schnelles Styling zu ermöglichen, beispielsweise zu Testzwecken.

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
> Dieses Attribut darf nicht verwendet werden, um semantische Informationen zu übermitteln. Selbst wenn das gesamte Styling entfernt wird, sollte eine Seite semantisch korrekt bleiben. Normalerweise sollte es nicht genutzt werden, um irrelevante Informationen zu verbergen; dazu sollte das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
