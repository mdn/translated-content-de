---
title: Tastatur-navigierbare JavaScript-Widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{AccessibilitySidebar}}

Webanwendungen verwenden oft JavaScript, um Desktop-Widgets wie Menüs, Baumansichten, Rich-Text-Felder und Registerkarten-Panels nachzuahmen. Diese Widgets bestehen typischerweise aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die von Natur aus nicht dieselbe Tastaturfunktionalität bieten wie ihre Desktop-Pendants. Dieses Dokument beschreibt Techniken, um JavaScript-Widgets mithilfe der Tastatur zugänglich zu machen.

## Verwenden von tabindex

Standardmäßig werden beim Surfen auf einer Webseite mit der Tabulatortaste nur interaktive Elemente (wie Links, Formularelemente) fokussiert. Mit dem `tabindex`- [globalen Attribut](/de/docs/Web/HTML/Global_attributes) können Autoren auch andere Elemente fokussierbar machen. Wenn es auf `0` gesetzt ist, wird das Element mit der Tastatur und per Skript fokussierbar. Bei `-1` wird das Element per Skript fokussierbar, jedoch nicht Teil der Tastatur-Fokusreihenfolge.

Die Reihenfolge, in der Elemente fokussiert werden, wenn eine Tastatur verwendet wird, ist standardmäßig die Quellreihenfolge. In Ausnahmefällen möchten Autoren möglicherweise die Reihenfolge neu definieren. Dazu können Autoren `tabindex` auf eine beliebige positive Zahl setzen.

> [!WARNING]
> Vermeiden Sie die Verwendung von positiven Werten für `tabindex`. Elemente mit einem positiven `tabindex` werden vor den Standard-Interaktions-elementen auf der Seite platziert. Das bedeutet, dass Seitenautoren `tabindex`-Werte für alle fokussierbaren Elemente auf der Seite festlegen (und pflegen) müssen, wenn sie einen oder mehrere positive Werte für `tabindex` verwenden.

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
      <td>Folgt der Plattformkonvention des Elements (ja für Formularelemente, Links usw.).</td>
      <td>Folgt der Plattformkonvention des Elements.</td>
    </tr>
    <tr>
      <td>Negativ (d.h. <code>tabindex="-1"</code>)</td>
      <td>Ja</td>
      <td>Nein; der Autor muss das Element mit <a href="/de/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in Antwort auf Pfeil- oder andere Tastendrücke fokussieren.</td>
    </tr>
    <tr>
      <td>Null (d.h. <code>tabindex="0"</code>)</td>
      <td>Ja</td>
      <td>In der Tabulator-Reihenfolge relativ zur Position des Elements im Dokument (interactive Elemente wie {{HTMLElement('a')}} verhalten sich standardmäßig so, sie benötigen das Attribut nicht).</td>
    </tr>
    <tr>
      <td>Positiv (z.B. <code>tabindex="33"</code>)</td>
      <td>Ja</td>
      <td><code>tabindex</code>-Wert bestimmt, wo sich dieses Element in der Tabulator-Reihenfolge befindet: kleinere Werte positionieren Elemente früher in der Reihenfolge als größere Werte (zum Beispiel wird <code>tabindex="7"</code> vor <code>tabindex="11"</code> platziert).</td>
    </tr>
  </tbody>
</table>

### Nicht-native Steuerelemente

Interaktive native HTML-Elemente wie {{ HTMLElement("a") }}, {{ HTMLElement("input") }} und {{ HTMLElement("select") }} sind bereits über Tastaturen zugänglich, daher ist die Verwendung eines dieser Elemente der schnellste Weg, um Komponenten mit Tastaturen funktionsfähig zu machen.

Autoren können auch ein {{ HTMLElement("div") }} oder {{ HTMLElement("span") }} durch Hinzufügen eines `tabindex` von `0` tastaturzugänglich machen. Dies ist besonders nützlich für Komponenten, die interaktive Elemente verwenden, die in HTML nicht existieren.

### Gruppieren von Steuerelementen

Für die Gruppierung von Widgets wie Menüs, Registerkartenlisten, Gittern oder Baumansichten sollte das übergeordnete Element in der Tabulator-Reihenfolge sein (`tabindex="0"`) und jede nachfolgende Auswahl/Tabulator/Zelle/Zeile sollte aus der Tabulator-Reihenfolge entfernt werden (`tabindex="-1"`). Benutzer sollten in der Lage sein, die nachfolgenden Elemente mit den Pfeiltasten zu navigieren. (Für eine vollständige Beschreibung der normalerweise erwarteten Tastaturunterstützung für typische Widgets siehe die [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

Das folgende Beispiel zeigt diese Technik mit einem verschachtelten Menü-Steuerelement. Sobald der Tastaturfokus auf das enthaltene {{ HTMLElement("ul") }}-Element fällt, muss der JavaScript-Entwickler den Fokus programmgesteuert verwalten und auf Pfeiltasten reagieren. Für Techniken zur Verwaltung des Fokus innerhalb von Widgets siehe "Fokus innerhalb von Gruppen verwalten" unten.

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

Wenn ein benutzerdefiniertes Steuerelement deaktiviert wird, entfernen Sie es aus der Tabulator-Reihenfolge, indem Sie `tabindex="-1"` setzen. Beachten Sie, dass deaktivierte Elemente innerhalb eines gruppierten Widgets (wie Menüelemente in einem Menü) weiterhin mit den Pfeiltasten navigierbar sein sollten.

## Fokus innerhalb von Gruppen verwalten

Wenn ein Benutzer von einem Widget zu einem anderen wechselt und zurückkehrt, sollte der Fokus auf das spezifische Element zurückkehren, das den Fokus hatte, beispielsweise das Baum-Element oder die Gitterzelle. Es gibt zwei Techniken, dies zu erreichen:

1. Wandernder `tabindex`: programmgesteuertes Verschieben des Fokus
2. `aria-activedescendant`: Verwaltung eines 'virtuellen' Fokus

### Technik 1: Wandernder tabindex

Das Setzen des `tabindex` des fokussierten Elements auf "0" stellt sicher, dass, wenn der Benutzer vom Widget wegwechselt und dann zurückkehrt, das ausgewählte Element in der Gruppe den Fokus behält. Beachten Sie, dass beim Aktualisieren des `tabindex` auf "0" auch das zuvor ausgewählte Element auf `tabindex="-1"` aktualisiert werden muss. Diese Technik erfordert das programmgesteuerte Verschieben des Fokus als Reaktion auf Tastendruckereignisse und die Aktualisierung des `tabindex`, um das aktuell fokussierte Element widerzuspiegeln. Um dies zu tun:

Binden Sie einen Tastendruck-Handler an jedes Element in der Gruppe und wenn eine Pfeiltaste verwendet wird, um zu einem anderen Element zu wechseln:

1. Wenden Sie programmgesteuert den Fokus auf das neue Element an,
2. aktualisieren Sie den `tabindex` des fokussierten Elements auf "0", und
3. aktualisieren Sie den `tabindex` des vorher fokussierten Elements auf "-1".

Hier ist ein Beispiel für eine [WAI-ARIA Baumansicht](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html), die diese Technik verwendet.

### Tipps

#### Verwenden Sie element.focus(), um den Fokus zu setzen

Verwenden Sie nicht `createEvent()`, `initEvent()` und `dispatchEvent()`, um den Fokus auf ein Element zu senden. DOM-Fokusereignisse werden als nur informativ angesehen: sie werden vom System erzeugt, nachdem etwas fokussiert ist, aber nicht tatsächlich verwendet, um den Fokus zu setzen. Verwenden Sie stattdessen `element.focus()`.

#### Verwenden Sie onfocus, um den aktuellen Fokus zu verfolgen

Gehen Sie nicht davon aus, dass alle Fokusänderungen über Tastatur- und Mausereignisse kommen: Hilfstechnologien wie Bildschirmleser können den Fokus auf jedes fokussierbare Element setzen. Verfolgen Sie den Fokus mithilfe von `onfocus` und `onblur`.

`onfocus` und `onblur` können jetzt mit jedem Element verwendet werden. Es gibt keine standardmäßige DOM-Schnittstelle, um den aktuellen Dokumentfokus zu erhalten. Wenn Sie den Fokusstatus verfolgen möchten, können Sie [document.activeElement](/de/docs/Web/API/Document/activeElement) verwenden, um das aktive Element zu erhalten. Außerdem können Sie [document.hasFocus](/de/docs/Web/API/Document/hasFocus) verwenden, um sicherzustellen, dass das aktuelle Dokument den Fokus hat.

### Technik 2: `aria-activedescendant`

Diese Technik beinhaltet das Binden eines einzigen Ereignis-Handlers an das Container-Widget und die Verwendung von `aria-activedescendant`, um einen "virtuellen" Fokus zu verfolgen. (Für weitere Informationen zu ARIA siehe diesen [Überblick über zugängliche Webanwendungen und Widgets](/de/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

Die Eigenschaft `aria-activedescendant` identifiziert die ID des nachfolgenden Elements, das derzeit den virtuellen Fokus hat. Der Ereignis-Handler im Container muss auf Tastatur- und Mausereignisse reagieren, indem er den Wert von `aria-activedescendant` aktualisiert und sicherstellt, dass das aktuelle Element entsprechend gestylt wird (zum Beispiel mit einem Rahmen oder einer Hintergrundfarbe).

## Allgemeine Richtlinien

### Verwenden Sie onkeydown, um Tastenereignisse abzufangen, nicht onkeypress

IE löst keine `keypress`-Ereignisse für nicht-alphanumerische Tasten aus. Verwenden Sie stattdessen `onkeydown`.

### Stellen Sie sicher, dass Tastatur und Maus dasselbe Erlebnis bieten

Um sicherzustellen, dass das Benutzererlebnis unabhängig vom Eingabegerät konsistent ist, sollten Tastatur- und Mausereignis-Handler Code teilen, wo dies angebracht ist. Zum Beispiel sollte der Code, der den `tabindex` oder das Styling beim Navigieren mit den Pfeiltasten aktualisiert, auch von Mausklick-Handlern verwendet werden, um dieselben Änderungen zu erzielen.

### Stellen Sie sicher, dass die Tastatur verwendet werden kann, um ein Element zu aktivieren

Um sicherzustellen, dass die Tastatur verwendet werden kann, um Elemente zu aktivieren, sollten alle an Mausereignisse gebundenen Handler ebenfalls an Tastaturereignisse gebunden werden. Zum Beispiel, um sicherzustellen, dass die Eingabetaste ein Element aktiviert, sollten Sie `doSomething()` auch an das Tastendruckereignis binden: `onkeydown="event.code === 'Enter' && doSomething();"`.

### Zeichnen Sie immer den Fokus für tabindex="-1"-Elemente und Elemente, die programmgesteuert den Fokus erhalten

IE zeichnet nicht automatisch den Fokusumriss für Elemente, die programmgesteuert den Fokus erhalten. Wählen Sie zwischen dem Ändern der Hintergrundfarbe über etwas wie `this.style.backgroundColor = "gray";` oder fügen Sie einen gepunkteten Rahmen über `this.style.border = "1px dotted invert"` hinzu. Im Fall des gepunkteten Rahmens müssen Sie sicherstellen, dass diese Elemente mit einem unsichtbaren 1px-Rahmen beginnen, damit das Element nicht wächst, wenn der Rahmenstil angewendet wird (Rahmen nehmen Platz ein, und IE implementiert keine CSS-Outlines).

### Verhindern Sie, dass verwendete Tastenereignisse Browserfunktionen ausführen

Wenn Ihr Widget ein Tastenereignis behandelt, verhindern Sie, dass der Browser es ebenfalls verarbeitet (zum Beispiel das Scrollen als Reaktion auf die Pfeiltasten), indem Sie den Rückgabewert Ihres Ereignis-Handlers verwenden. Wenn Ihr Ereignis-Handler `false` zurückgibt, wird das Ereignis nicht über Ihren Handler hinaus propagiert.

Zum Beispiel:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

Wenn `handleKeyDown()` `false` zurückgibt, wird das Ereignis verbraucht, was verhindert, dass der Browser eine Aktion basierend auf dem Tastenanschlag durchführt.

### Verlassen Sie sich zum jetzigen Zeitpunkt nicht auf konsistentes Verhalten bei der Tastenwiederholung

Leider kann `onkeydown` je nachdem, welchen Browser und welches Betriebssystem Sie verwenden, wiederholt auftreten oder nicht.
