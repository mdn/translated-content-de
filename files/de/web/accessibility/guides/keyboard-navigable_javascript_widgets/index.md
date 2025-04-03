---
title: Tastatur-navigierbare JavaScript-Widgets
slug: Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Webanwendungen verwenden häufig JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten nachzubilden. Diese Widgets bestehen in der Regel aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht die gleiche Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mit der Tastatur zugänglich zu machen.

## Verwendung von `tabindex`

Standardmäßig werden beim Durchblättern einer Webseite mit der Tabulator-Taste nur interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem `tabindex`-[globalen Attribut](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Wenn es auf `0` gesetzt ist, wird das Element über die Tastatur und das Skript fokussierbar. Wenn es auf `-1` gesetzt ist, wird das Element über das Skript fokussierbar, ist aber nicht Teil der Tastaturfokus-Reihenfolge.

Die Reihenfolge, in der Elemente bei Verwendung einer Tastatur den Fokus erhalten, entspricht standardmäßig der Quellreihenfolge. In Ausnahmefällen möchten Autoren die Reihenfolge eventuell neu definieren. Dazu können Autoren `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung positiver Werte für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den standardmäßigen interaktiven Elementen auf der Seite platziert, was bedeutet, dass Seitenautoren `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite festlegen (und pflegen) müssen, wenn sie einen oder mehrere positive Werte für `tabindex` verwenden.

Die folgende Tabelle beschreibt das `tabindex`-Verhalten in modernen Browsern:

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
      <td>Befolgt die Plattformkonvention des Elements (ja für Formularelemente, Links usw.).</td>
      <td>Befolgt die Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (z. B. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Reaktion auf Pfeil- oder andere Tasteneingaben fokussieren.</td>
    </tr>
    <tr>
      <td>Null (z. B. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In Tab-Reihenfolge relativ zur Position des Elements im Dokument (beachten Sie, dass interaktive Elemente wie {{HTMLElement('a')}} dieses Verhalten standardmäßig haben und das Attribut nicht benötigen).</td>
    </tr>
    <tr>
      <td>Positiv (z. B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td>Der `tabindex`-Wert bestimmt, wo dieses Element in der Tab-Reihenfolge positioniert ist: Kleinere Werte positionieren Elemente früher in der Tab-Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> positioniert).</td>
    </tr>
  </tbody>
</table>

### Nicht-nativ steuerbare Elemente

Interaktive native HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits über die Tastatur zugänglich. Ihre Verwendung ist daher der schnellste Weg, um Komponenten mit Tastaturen arbeiten zu lassen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} durch Hinzufügen eines `tabindex` von `0` tastaturzugänglich machen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht existieren.

### Gruppensteuerungen

Für Gruppierungs-Widgets wie Menüs, Registerkartenlisten, Raster oder Baumansichten sollte das übergeordnete Element in der Tab-Reihenfolge sein (`tabindex="0"`), und jede nachrangige Auswahl/Registerkarte/Zelle/Zeile sollte aus der Tab-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten in der Lage sein, die nachrangigen Elemente über die Pfeiltasten zu navigieren. (Für eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets siehe die [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik bei einer verschachtelten Menüsteuerung. Sobald der Tastaturfokus auf das enthaltene {{ HTMLElement("ul") }}-Element gelangt, muss der JavaScript-Entwickler den Fokus programmgesteuert verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Fokus innerhalb von Gruppen verwalten" unten.

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

#### Deaktivierte Steuerungen

Wenn eine benutzerdefinierte Steuerung deaktiviert wird, entfernen Sie sie aus der Tab-Reihenfolge, indem Sie `tabindex="-1"` festlegen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüpunkte in einem Menü) weiterhin mit den Pfeiltasten navigierbar bleiben sollten.

## Fokus innerhalb von Gruppen verwalten

Wenn ein Benutzer von einem Widget weg- und zurückwechselt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, z. B. das Baum-Element oder die Rasterzelle. Es gibt zwei Techniken, um dies zu erreichen:

1. Roving `tabindex`: Programmierte Änderung des Fokus
2. `aria-activedescendant`: Verwaltung eines "virtuellen" Fokus

### Technik 1: Roving tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer von dem Widget weg- und dann zurückwechselt, das ausgewählte Element innerhalb der Gruppe den Fokus behält. Beachten Sie, dass die Aktualisierung des `tabindex` auf "0" auch die Aktualisierung des zuvor ausgewählten Elements auf `tabindex="-1"` erfordert. Diese Technik beinhaltet die programmierte Änderung des Fokus in Reaktion auf Tasteneingaben und die Aktualisierung des `tabindex`, um das aktuell fokussierte Element zu reflektieren. Hierfür:

Binden Sie einen Tasten-Down-Handler an jedes Element in der Gruppe, und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Geben Sie dem neuen Element programmatisch den Fokus,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0", und
3. aktualisieren Sie den `tabindex` des zuvor fokussierten Elements auf "-1".

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzelnen Ereignis-Handlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen über ARIA siehe diese [Übersicht zu zugänglichen Webanwendungen und Widgets](/de/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets).)

Die Eigenschaft `aria-activedescendant` identifiziert die ID des nachrangigen Elements, das derzeit den virtuellen Fokus hat. Der Ereignis-Handler am Container muss auf Tastatur- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt ist (z. B. mit einem Rahmen oder Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwendung von Fokusevents

- Lösen Sie das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis nicht aus, um den Fokus auf ein Element zu setzen. DOM-Fokusevents gelten nur als informativ: Sie werden vom System erzeugt, nachdem etwas fokussiert wurde, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.
- Hören Sie auf die [`focus`](/de/docs/Web/API/Element/focus_event)- und [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignisse, um Fokusänderungen zu verfolgen. Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tastatur- und Mausereignisse kommen: Unterstützende Technologien wie Screenreader können den Fokus auf jedes fokussierbare Element setzen. Wenn Sie den Fokusstatus für das gesamte Dokument verfolgen möchten, können Sie [`document.activeElement`](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten, oder [`document.hasFocus`](/de/docs/Web/API/Document/hasFocus), um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Stellen Sie sicher, dass Tastatur und Maus die gleiche Erfahrung bieten

Um sicherzustellen, dass die Benutzererfahrung unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mausereignis-Handler, wenn möglich, gemeinsamen Code verwenden. Beispielsweise sollte der Code, der den `tabindex` oder das Styling aktualisiert, wenn Benutzer mit den Pfeiltasten navigieren, auch von Mausklick-Handlern verwendet werden, um dieselben Änderungen vorzunehmen.

### Stellen Sie sicher, dass die Tastatur zur Aktivierung von Elementen verwendet werden kann

Um sicherzustellen, dass die Tastatur zur Aktivierung von Elementen verwendet werden kann, sollten alle an Mausereignisse gebundenen Handler auch an Tastaturereignisse gebunden werden. Um beispielsweise sicherzustellen, dass die Eingabetaste ein Element aktiviert, sollten Sie, wenn Sie ein `onclick="doSomething()"` haben, `doSomething()` auch an das Tastatur-Down-Ereignis binden: `onkeydown="event.code === "Enter" && doSomething();"`.

### Zeichnen Sie immer den Fokus für `tabindex="-1"` Elemente und Elemente, die programmgesteuert den Fokus erhalten

Stellen Sie sicher, dass fokussierte Elemente einen Fokusrahmen haben. Dies kann mit der CSS-Eigenschaft {{cssxref("outline")}} erreicht werden, die nicht bedingungslos auf `none` gesetzt werden sollte — wenn Sie unnötige Fokusrahmen vermeiden möchten, verwenden Sie die Pseudo-Klasse {{cssxref(":focus-visible")}}.

### Verhindern, dass verwendete Tasteneingaben Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenereignis verarbeitet, verhindern Sie, dass der Browser es ebenfalls verarbeitet (zum Beispiel das Scrollen als Reaktion auf die Pfeiltasten) durch die Verwendung des Rückgabewerts Ihres Ereignis-Handlers. Wenn Ihr Ereignis-Handler `false` zurückgibt, wird das Ereignis innerhalb Ihres Handlers verbraucht und verhindert, dass der Browser eine Aktion basierend auf der Tastenfolge ausführt.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht und verhindert, dass der Browser auf das Keystroke reagiert.

### Verlassen Sie sich derzeit nicht auf konsistentes Verhalten bei Tastenwiederholungen

Leider können `onkeydown`-Ereignisse je nach Browser und Betriebssystem, auf dem Sie arbeiten, wiederholt werden oder nicht.
