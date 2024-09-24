---
title: Textetiketten und Namen
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Es gibt viele Situationen, in denen ein Steuerelement, ein Dialog oder ein anderes Website-Feature einen beschreibenden Namen oder ein Etikett erhalten sollte, um Benutzern von unterstützenden Technologien zu ermöglichen, den Zweck zu verstehen und wie sie es korrekt bedienen können. In dieser Kategorie gibt es verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu kennzeichnen, die das href-Attribut haben

Geben Sie in Bildkarten jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verlinken. Erfolgt dies nicht, wird eine Bildkarte für Benutzer von unterstützenden Technologien schwer nutzbar — sie benötigen alternativen Text, um den Zweck eines Bildes zu verstehen.

### Beispiele

Das folgende Beispiel zeigt eine einfache Bildkarte (übernommen aus [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Bereiche in der Bibliothek. Wählen Sie einen Bereich aus, um weitere Informationen über diesen Bereich zu erhalten." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Referenz" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Audio-visuelles Labor" />
</map>
```

Sehen Sie sich die [Referenzseite für das `<area>`-Element](/de/docs/Web/HTML/Element/area) für ein live-interaktives Beispiel an.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten gekennzeichnet werden

Für jeden Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modales Dialogfeld, das den Benutzer auffordert, eine Auswahl zu treffen oder auf eine durchgeführte Aktion zu reagieren), geben Sie ihm ein beschreibendes Etikett oder einen Namen, so dass Benutzer von unterstützenden Technologien leicht erkennen können, welche Aufgabe er erfüllt.

Ein Dialogfeld wird im Allgemeinen durch ein ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)-Attribut gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, um ein Etikett bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, das mittels `role="dialog"` definiert und mit `aria-labelledby` gekennzeichnet wird.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Ihre persönlichen Daten wurden erfolgreich aktualisiert</h2>
  <p id="dialog1Desc">
    Sie können Ihre Daten jederzeit im Benutzerkontenbereich ändern.
  </p>
  <button>Schließen</button>
</div>
```

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Etikettentext anzugeben:

```html
<div role="dialog" aria-label="Bestätigung der Aktualisierung persönlicher Daten">
  <p>
    Ihre persönlichen Daten wurden erfolgreich aktualisiert. Sie können Ihre Daten
    jederzeit im Benutzerkontenbereich ändern.
  </p>
  <button>Schließen</button>
</div>
```

### Siehe auch

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [WAI-ARIA: dialog role](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, dass in jedem HTML-Dokument ein {{htmlelement("title")}} enthalten ist, der den Zweck der Seite beschreibt. Eine häufige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, den Inhalt einer Seite anhand ihres Titels zu erschließen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchsuchen, um deren Inhalt zu ermitteln, was zeitaufwendig und potenziell verwirrend sein kann.

### Beispiele

Der Titel des Referenzartikels über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: Das Document Title-Element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein anderes Beispiel könnte so aussehen:

```html
<title>Füllen Sie Ihre Details aus, um sich zu registrieren — myGov-Dienste</title>
```

Um dem Benutzer zu helfen, können Sie den Seitentitelwert ändern, um bedeutende Zustandsänderungen der Seite widerzuspiegeln (wie beispielsweise Probleme bei der Formularvalidierung):

```html
<title>2 Fehler — Füllen Sie Ihre Details aus, um sich zu registrieren — myGov-Dienste</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebetteter Inhalt muss gekennzeichnet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das den eingebetteten Inhalt beschreibt. Dies schließt die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente ein. Diese Elemente werden häufig für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern von unterstützenden Technologien zu verstehen, was das Element zeigt.

## Abbildungen mit optionalen Bildunterschriften sollten gekennzeichnet sein

Für beste Zugänglichkeit binden Sie ein {{HTMLElement("figcaption")}} innerhalb eines {{HTMLElement("figure")}}-Elements ein, auch wenn dies technisch optional ist. Die Bildunterschrift ergänzt jeden Alternativtext bei Bildern innerhalb der Abbildung. Die Bildunterschrift beschreibt den Zweck der Figur im Dokument, der sich möglicherweise von einer einfachen Beschreibung eines visuellen Elements unterscheidet, wie sie durch den Alternativtext bereitgestellt wird.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Abbildung mit einer Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Erscheinungsbild des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus funktionaler Sicht (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Schwarz-Weiß-Nahaufnahmefoto von Seidenpflanzenblüten" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen gekennzeichnet sein

Fieldset-Elemente müssen eine textliche Beschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie eine Legende, um ein Fieldset zu kennzeichnen

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element gruppieren, sollten Sie ein geschachteltes {{htmlelement("legend")}}-Element darin einfügen, das eine klare Beschreibung der Gruppe enthält.

Benutzern von unterstützenden Technologien hilft diese Beschreibung dabei, den Gesamtsinn der Gruppe zu erfassen. Ohne die Legende müssten sie sich über die individuellen Formularelemente in der Gruppe bewegen, um eine Vorstellung vom Gesamtsinn zu bekommen, was zu Verwirrung führen könnte.

### Beispiele

```html
<form>
  <fieldset>
    <legend>Wählen Sie Ihr Lieblingsmonster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Krake</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Sie können eine interaktive Live-Version dieses Beispiels auf der [Referenzseite für das `<fieldset>`](/de/docs/Web/HTML/Element/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen gekennzeichnet sein

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das ihren Zweck identifiziert. Dies gilt für alle Typen von {{htmlelement("input")}}-Elementen, ebenso wie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente sowie jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in diesem Fall ist der Zusammenhang zwischen dem Formularelement und dem Etikett aus der Struktur ersichtlich. Oder, Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement schaffen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Etiketts festlegen.

### Beispiel

```html
<label
  >Ich stimme den Bedingungen zu.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="emailoptin" name="optin" />
<label for="emailoptin">Ja, bitte senden Sie mir Neuigkeiten über dieses Produkt.</label>
```

## Formularelemente sollten ein sichtbares Texteretikett haben

Neben einem {{htmlelement("label")}} für jedes Formularelement sollten diese Etiketten sichtbar sein, nicht versteckt. Sichtbare Etiketten helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer mit dem Tippen beginnt.

## Frame-Elemente müssen gekennzeichnet sein

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch die älteren, veralteten {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Frames beschreibt. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu kennzeichnen. Ohne Titel müssen Benutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern eingestellt werden. Darüber hinaus ist es für Screenreader schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung, gestalten Sie alle Seiten, die Frames verwenden, um, um mit CSS ein ähnliches Layout zu erzielen.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzustimmen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs mit dem Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und zugänglichsten, den gleichen Titel an beiden Stellen bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen gekennzeichnet sein

Stellen Sie sicher, dass Ihre Überschriften nicht-leere Textinhalte haben und nicht versteckt sind, beispielsweise durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Benutzer von Screenreadern "überfliegen" in der Regel die Überschriften einer Seite, ähnlich wie sehende Benutzer; nicht-überschriftlicher Text, der mit Überschriftselementen markiert ist, kann Verwirrung stiften.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht-leere Textinhalte haben und nicht versteckt sind, beispielsweise durch CSS `display:none` oder `aria-hidden=true`. Benutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte zu markieren.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne Titel müssen Benutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als Best Practice sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzustimmen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs mit dem Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und zugänglichsten, den gleichen Titel an beiden Stellen bereitzustellen.

## Inhalt mit Bildern muss gekennzeichnet werden

Stellen Sie für alle inhaltstragenden (d.h. nicht dekorativen) Bilder und bildähnlichen Elemente beschreibenden Text bereit. Dazu gehören SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Der typische Weg, dies zu tun, ist mit dem `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung das in dem Bild Dargestellte erfasst.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Schwarz-Weiß-Nahaufnahmefoto von Seidenpflanzenblüten" />
```

## Interaktive Elemente müssen gekennzeichnet sein

Wenn ein Element dazu gedacht ist, dass Nutzer damit interagieren, sollte es ein Etikett besitzen. Zu den interaktiven Elementen gehören Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art, ein Element zu kennzeichnen, hängt von seinem Typ ab: Bei Formularelementen verwenden Sie ein {{htmlelement("label")}}; bei Links, Schaltflächen und klickbaren Elementen liefert der Textinhalt des Elements typischerweise das Etikett. Wenn keine andere Möglichkeit existiert, ein Element zu kennzeichnen, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.

## Verwenden Sie das label-Attribut bei optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe so zu beschreiben, dass unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut an den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe von Optionen an.

```html
<label for="dino-select">Wählen Sie einen Dinosaurier:</label>
<select id="dino-select">
  <optgroup label="Theropoden">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropoden">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

## Symbolleisten müssen gekennzeichnet sein, wenn es mehr als eine gibt

Wenn Sie in einer Webanwendung mehr als eine Symbolleiste mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwenden, um jede zu kennzeichnen, damit sie von unterstützenden Technologien beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu kennzeichnen, auch wenn es nur eine pro Seite gibt.

### Siehe auch

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nichttextlichen Inhalte, die dem Benutzer präsentiert werden, besitzen eine textliche Alternative, die denselben Zweck erfüllt, mit Ausnahme der Situationen, die im obigen Link aufgeführt sind.
- [2.4.4 Zweck des Links (im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit seinem programmatisch ermittelten Linkkontext abgeleitet werden, es sei denn, der Zweck des Links wäre für Benutzer im Allgemeinen mehrdeutig.
- [2.4.9 Zweck des Links (nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Ein Mechanismus ist verfügbar, der es ermöglicht, den Zweck jedes Links allein aus dem Linktext zu identifizieren, es sei denn, der Zweck des Links wäre für Benutzer im Allgemeinen mehrdeutig.
