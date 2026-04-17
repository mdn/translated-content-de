---
title: "`style` HTML Globalattribut"
short-title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`style`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält [CSS](/de/docs/Web/CSS)-Stildeklarationen, die auf das Element angewendet werden sollen. Beachten Sie, dass empfohlen wird, Stile in einer separaten Datei oder mehreren Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dazu, eine schnelle Stilgestaltung zu ermöglichen, beispielsweise für Testzwecke.

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
> Dieses Attribut darf nicht verwendet werden, um semantische Informationen zu vermitteln. Selbst wenn alle Stile entfernt werden, sollte eine Seite semantisch korrekt bleiben. In der Regel sollte es nicht verwendet werden, um irrelevante Informationen zu verbergen; dies sollte mit dem [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
