---
title: Tastatur-navigierbare JavaScript-Widgets
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Webanwendungen verwenden häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten zu simulieren. Diese Widgets bestehen in der Regel aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die nicht von Natur aus dieselbe Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.

## Verwendung von tabindex

Standardmäßig werden beim Navigieren einer Webseite mit der Tabulatortaste nur interaktive Elemente (wie Links, Formularsteuerelemente) fokussiert. Mit dem [globalen Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `tabindex` können Autoren andere Elemente ebenfalls fokussierbar machen. Bei `0` wird das Element per Tastatur und Skript fokussierbar. Bei `-1` wird das Element per Skript fokussierbar, jedoch nicht in die Tastaturfokus-Reihenfolge aufgenommen.

Die Reihenfolge, in der Elemente beim Verwenden der Tastatur fokussiert werden, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen möchten Autoren möglicherweise die Reihenfolge neu definieren. Dazu können sie `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den standardmäßig interaktiven Elementen auf der Seite platziert, was bedeutet, dass Seitenautoren für alle fokussierbaren Elemente auf der Seite `tabindex`-Werte setzen (und pflegen) müssen, wann immer sie ein oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code>-Attribut</th>
      <th>Fokussierbar mit Maus oder JavaScript über <code>element.focus()</code></th>
      <th>Tab-navigierbar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>nicht vorhanden</td>
      <td>Befolgt die Plattformkonvention des Elements (ja für Formularsteuerelemente, Links usw.).</td>
      <td>Befolgt die Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z.B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> als Reaktion auf Pfeil- oder andere Tastendrücke fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z.B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In der Registerkarte in der Reihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td><code>tabindex</code>-Wert bestimmt, wo dieses Element in der Tabulatorreihenfolge positioniert wird: Kleinere Werte positionieren Elemente früher in der Tabulatorreihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Native HTML-Elemente, die interaktiv sind, wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }}, sind bereits über Tastaturen zugänglich, sodass deren Verwendung der schnellste Weg ist, um Komponenten mit Tastaturen funktionsfähig zu machen.

Autoren können auch eine {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} tastaturzugänglich machen, indem sie `tabindex` von `0` hinzufügen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht vorhanden sind.

### Gruppierung von Steuerelementen

Für gruppierte Widgets wie Menüs, Registerkartenlisten, Raster oder Baumansichten sollte das übergeordnete Element in der Tab-Reihenfolge sein (`tabindex="0"`), und jede untergeordnete Wahl/Tabellenzelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten in der Lage sein, die nachgeordneten Elemente mit den Pfeiltasten zu navigieren. (Eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets finden Sie in den [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einem verschachtelten Menü-Steuerelement. Sobald der Tastaturfokus auf das enthaltene {{ HTMLElement("ul") }}-Element fällt, muss der JavaScript-Entwickler das Fokussieren programmatisch verwalten und auf Pfeiltasten reagieren. Techniken zur Fokussierung innerhalb von Widgets finden Sie unter "Verwaltung des Fokus innerhalb von Gruppen" weiter unten.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### Deaktivierte Steuerelemente

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie z.B. Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar sein sollten.

## Verwaltung des Fokus innerhalb von Gruppen

Wenn ein Benutzer einen Widget verlässt und zurückkehrt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, z.B. das Baumelement oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Roving `tabindex`: Programmgesteuertes Verschieben des Fokus
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Roving tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer die Registerkarte verlässt und dann zurückkehrt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass das Aktualisieren des `tabindex` auf "0" erfordert, auch das zuvor ausgewählte Element auf `tabindex="-1"` zu aktualisieren. Diese Technik beinhaltet das programmgesteuerte Verschieben des Fokus in Reaktion auf Tastenevents und das Aktualisieren des `tabindex`, um das derzeit fokussierte Element widerzuspiegeln. Dazu:

Binden Sie einen Tasten-Handler an jedes Element in der Gruppe, und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Fokussieren Sie programmgesteuert das neue Element,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0" und
3. aktualisieren Sie den `tabindex` des zuvor fokussierten Elements auf "-1".

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzelnen Ereignishandlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen über ARIA siehe diese [Übersicht über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

Die Eigenschaft `aria-activedescendant` identifiziert die ID des Nachfahrenelements, das derzeit den virtuellen Fokus hat. Der Ereignishandler auf dem Container muss auf Tasten- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element angemessen gestylt wird (zum Beispiel mit einem Rand oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokusereignissen

- Lösen Sie das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis nicht aus, um den Fokus auf ein Element zu senden. DOM-Fokusereignisse werden nur als informativ betrachtet: Sie werden vom System nach dem Fokussieren generiert, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hören Sie auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignisse, um Fokusänderungen zu verfolgen. Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tastatur- und Mausereignisse erfolgen: Unterstützende Technologien wie Bildschirmleser können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Sicherstellen, dass Tastatur und Maus die gleiche Erfahrung bieten

Um sicherzustellen, dass das Benutzererlebnis unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mausereignishandler dort, wo es angebracht ist, Code gemeinsam nutzen. Beispielsweise sollte der Code, der den `tabindex` oder das Styling ändert, wenn Benutzer mit den Pfeiltasten navigieren, ebenfalls von Mausklick-Handlern verwendet werden, um dieselben Änderungen vorzunehmen.

### Sicherstellen, dass die Tastatur zur Aktivierung von Elementen verwendet werden kann

Um sicherzustellen, dass die Tastatur zur Aktivierung von Elementen verwendet werden kann, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden sein. Wenn Sie beispielsweise sicherstellen möchten, dass die Eingabetaste ein Element aktiviert, sollten Sie `doSomething()` an das Keydown-Ereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1"-Elemente und -Elemente, die programmgesteuert fokussiert werden

Stellen Sie sicher, dass fokussierte Elemente einen Fokusring haben. Dies kann mit der CSS-Eigenschaft {{cssxref("outline")}} erfolgen, die nicht bedingungslos auf `none` gesetzt werden sollte—wenn Sie verhindern möchten, dass unnötige Fokusringe angezeigt werden, verwenden Sie die Pseudo-Klasse {{cssxref(":focus-visible")}}.

### Verhindern Sie, dass verwendete Tastenevents Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenevent verarbeitet, verhindern Sie, dass der Browser es ebenfalls verarbeitet (zum Beispiel Scrollen als Reaktion auf die Pfeiltasten), indem Sie den Rückgabecode Ihres Ereignishandlers verwenden. Wenn Ihr Ereignishandler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1">…</span>
```

```js
span.onkeydown = handleKeyDown;
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht, wodurch der Browser daran gehindert wird, irgendeine Aktion basierend auf dem Tastendruck auszuführen.

### Vertrauen Sie nicht auf konsistentes Verhalten für Tastenwiederholung, bisher

Leider kann `onkeydown` je nach Browser und Betriebssystem, auf dem Sie gerade arbeiten, wiederholt oder nicht wiederholt werden.
