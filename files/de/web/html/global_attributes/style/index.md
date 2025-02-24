---
title: style
slug: Web/HTML/Global_attributes/style
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`style`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) enthält [CSS](/de/docs/Web/CSS)-Styling-Deklarationen, die auf das Element angewendet werden sollen. Es wird empfohlen, Styles in einer separaten Datei oder Dateien zu definieren. Dieses Attribut und das {{HTMLElement("style")}}-Element dienen hauptsächlich dem Zweck, schnell Styling anzuwenden, beispielsweise für Testzwecke.

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
> Dieses Attribut darf nicht verwendet werden, um semantische Informationen zu übermitteln. Auch wenn das gesamte Styling entfernt wird, sollte eine Seite semantisch korrekt bleiben. Typischerweise sollte es nicht verwendet werden, um irrelevante Informationen zu verstecken; dies sollte mithilfe des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributs erfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
