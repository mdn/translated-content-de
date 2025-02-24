---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`dir`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Richtung des Textes des Elements angibt.

{{InteractiveExample("HTML Demo: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p>هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

Es kann die folgenden Werte haben:

- `ltr`, was _von links nach rechts_ bedeutet und für Sprachen verwendet wird, die von links nach rechts geschrieben werden (wie Englisch);
- `rtl`, was _von rechts nach links_ bedeutet und für Sprachen verwendet wird, die von rechts nach links geschrieben werden (wie Arabisch);
- `auto`, was den Benutzeragenten entscheiden lässt. Es verwendet einen grundlegenden Algorithmus, indem es die Zeichen im Element analysiert, bis es ein Zeichen mit einer starken Richtung findet, und wendet dann diese Richtung auf das gesamte Element an.

> [!NOTE]
> Der `auto`-Wert sollte für Daten mit unbekannter Richtung verwendet werden, wie Daten, die aus Benutzereingaben oder externen Daten stammen.

Wenn nicht angegeben, wird der Wert vom übergeordneten Element [geerbt](#vererbung).

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Textausrichtung semantisch mit dem Inhalt und nicht mit der Präsentation zusammenhängt, wird empfohlen, dass Webentwickler wann immer möglich dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden. Auf diese Weise wird der Text korrekt angezeigt, selbst wenn der Browser CSS nicht unterstützt oder CSS deaktiviert ist.

## Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es den `dir`-Wert vom {{Glossary("Node/DOM", "übergeordneten Knoten")}}, der wiederum von seinem übergeordneten Element erben kann, und so weiter.

## Hinweise zur Verwendung

Ein Bild kann seine `dir`-Eigenschaft auf `"rtl"` setzen, in diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn eine Tabelle ihr `dir` auf `"rtl"` setzt, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Dieses Attribut ist für das {{ HTMLElement("bdo") }}-Element obligatorisch, wo es eine andere semantische Bedeutung hat.

Dieses Attribut wird nicht vom {{ HTMLElement("bdi") }}-Element geerbt. Wenn es nicht gesetzt ist, ist sein Wert `auto`.

Browser könnten Benutzern erlauben, die Textausrichtung von {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }}s zu ändern, um bei der Erstellung von Inhalten zu helfen. Chrome und Safari bieten eine Richtungsoption im Kontextmenü der Eingabefelder. Firefox verwendet <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>, aber AKTUALISIERT den `dir`-Attributwert NICHT.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
