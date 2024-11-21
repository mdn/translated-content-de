---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AccessibilitySidebar}}

Es gibt viele Situationen, in denen einem Steuerelement, Dialog oder einer anderen Website-Funktion ein beschreibender Name oder ein beschreibendes Label zugewiesen werden sollte, damit Nutzer von unterstützenden Technologien verstehen können, welchen Zweck es hat und wie es korrekt bedient wird. In dieser Kategorie gibt es verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten diskutiert.

## Verwenden Sie das alt-Attribut, um Bereichselemente zu beschriften, die das href-Attribut haben

Bei Bildkarten geben Sie jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verweisen. Wenn dies nicht erfolgt, wird die Verwendung einer Bildkarte für Nutzer von unterstützenden Technologien erschwert — sie benötigen alternativen Text, um verstehen zu können, welchen Zweck ein Bild hat.

### Beispiele

Das folgende Beispiel zeigt eine Bildkarte (entnommen aus [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)):

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Areas in the library. Select an area for
more information on that area." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Reference" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Audio visual lab" />
</map>
```

Sehen Sie sich die [Referenzseite des `<area>`-Elements](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel an.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Jedes Containerobjekt, dessen Inhalte als Dialogfeld agieren (zum Beispiel ein modaler Dialog, der den Nutzer auffordert, eine Auswahl zu treffen oder auf eine Aktion zu reagieren), sollte mit einem beschreibenden Label oder Namen versehen werden, damit Nutzer von unterstützenden Technologien einfach den Zweck erkennen können.

Ein Dialogfeld wird allgemein durch ein ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein einfaches Dialogfeld, das als solches mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet ist.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Label-Text zu enthalten:

```html
<div role="dialog" aria-label="Personal details updated confirmation">
  <p>
    Your personal details were successfully updated. You can change your details
    at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

### Siehe auch

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [WAI-ARIA: Dialogrolle](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialog-Autorpraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument ein {{htmlelement("title")}} anzugeben, das den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Nutzer von unterstützenden Technologien besteht darin, durch Lesen des Titels zu erkennen, welchen Inhalt eine Seite hat. Wenn der Titel nicht verfügbar ist, müssen sie die Seite navigieren, um den Inhalt zu bestimmen, was zeitaufwendig und potenziell verwirrend sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte folgendermaßen aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Nutzer zu helfen, können Sie den Seitentitel aktualisieren, um signifikante Änderungen des Seitenzustands widerzuspiegeln (z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet sein

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das die eingebetteten Inhalte beschreibt. Dazu gehören die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Nutzern von unterstützenden Technologien zu verstehen, was das Element zeigt.

## Abbildungen mit optionalen Beschriftungen sollten gekennzeichnet werden

Für die beste Zugänglichkeit fügen Sie innerhalb eines {{HTMLElement("figure")}}-Elements eine {{HTMLElement("figcaption")}} ein, obwohl dies technisch optional ist. Die Beschriftung ergänzt jeden alternativen Text zu den Bildern innerhalb der Abbildung. Die Beschriftung beschreibt den Zweck der Abbildung im Dokument, der von einer einfachen Beschreibung eines visuellen Elements abweichen kann, wie es vom alternativen Text bereitgestellt wird.

### Beispiel

Das folgende Beispiel zeigt Code für eine Abbildung mit einer Beschriftung. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Erscheinungsbild des Bildes; die {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

```html
<figure>
  <img
    src="milkweed.jpg"
    alt="Black and white close-up photo of milkweed flowers" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## Fieldset-Elemente müssen beschriftet werden

Fieldset-Elemente müssen eine Textbeschreibung haben, ähnlich wie andere Formularelemente. Verwenden Sie das {{htmlelement("legend")}}-Element, um den Zweck eines Fieldsets zu beschreiben.

## Verwenden Sie ein Legend, um ein Fieldset zu beschriften

Beim Gruppieren einer Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einschließen, das eine klare Beschreibung der Gruppe enthält.

Nutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, um den Gesamtzweck der Gruppe zu verstehen. Ohne das Legend müssten sie die einzelnen Formularelemente der Gruppe durchsuchen, um eine Vorstellung vom Gesamtzweck zu bekommen, was zu Verwirrung führen könnte.

### Beispiele

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Sie können eine Live-Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Element/fieldset) ansehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das den Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}}- und {{htmlelement("meter")}}-Elemente sowie jedes Element mit der [`switch` ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in diesem Fall ist die Zuordnung zwischen dem Formularelement und dem Label offensichtlich aus der Struktur. Oder Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement erstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

### Beispiel

```html
<label
  >I agree to the terms and conditions.
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">Yes, please send me news about this product.</label>
```

## Formularelemente sollten ein sichtbares Textlabel haben

Zusätzlich zu einem {{htmlelement("label")}} für jedes Formularelement sollten diese Labels sichtbar und nicht versteckt sein. Sichtbare Labels helfen _allen_ Nutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da er verschwindet, sobald der Nutzer mit der Eingabe beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, um den Inhalt des Frames zu beschreiben. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern entfernt werden. Darüber hinaus ist es für Bildschirmleser schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung sollten Sie alle Seiten überarbeiten, die Frames verwenden, um ein ähnliches Layout mithilfe von CSS zu erreichen.

Eine bewährte Praxis ist es auch, ein {{htmlelement("title")}} für das Dokument bereitzustellen, das im Frame eingeschlossen ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzugleichen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

### Beispiel

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## Überschriften müssen beschriftet werden

Stellen Sie sicher, dass Ihre Überschriften nicht leere Textinhalte haben und nicht versteckt sind, etwa durch CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Achten Sie auch darauf, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzungsweg, um Text hervorzuheben. Nutzer von Bildschirmlesern „überfliegen“ in der Regel die Überschriften einer Seite, ähnlich wie sehende Nutzer; nicht-Überschriftstexte, die mit Überschriftselementen ausgezeichnet sind, können zu Verwirrung führen.

## Überschriften sollten sichtbare Textinhalte haben

Stellen Sie sicher, dass Ihre Überschriften nicht leere Textinhalte haben und nicht versteckt sind, etwa durch CSS `display:none` oder `aria-hidden=true`. Nutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte zu kennzeichnen.

## Verwenden Sie das title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, das den Inhalt des Frames beschreibt. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Eine bewährte Praxis ist es auch, ein {{htmlelement("title")}} für das Dokument bereitzustellen, das im Frame eingeschlossen ist, mit einem Inhalt, der dem `title`-Attribut des Frames entspricht. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzugleichen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des im Frame eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, denselben Titel an beiden Stellen bereitzustellen.

## Inhalt mit Bildern muss beschriftet werden

Stellen Sie für alle inhaltlichen (d. h. nicht dekorativen) Bilder und bildähnliche Elemente beschreibenden Text bereit. Dies schließt SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente ein, ebenso wie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Die übliche Weise dies zu tun, ist mit dem `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element dafür vorgesehen ist, dass Nutzer damit interagieren, sollte es ein Label haben. Interaktive Elemente schließen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element ein, das einen Handler für Maus- oder Tastaturereignisse hat. Die Art und Weise, ein Element zu beschriften, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente bietet der Textinhalt des Elements in der Regel das Label. Wenn keine andere Möglichkeit zur Beschriftung eines Elements besteht, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut.

## Verwenden Sie das Label-Attribut bei optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien es ihren Nutzern zugänglich machen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut an den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe von Optionen an.

```html
<label for="dino-select">Choose a dinosaur:</label>
<select id="dino-select">
  <optgroup label="Theropods">
    <option>Tyrannosaurus</option>
    <option>Velociraptor</option>
    <option>Deinonychus</option>
  </optgroup>
  <optgroup label="Sauropods">
    <option>Diplodocus</option>
    <option>Saltasaurus</option>
    <option>Apatosaurus</option>
  </optgroup>
</select>
```

## Symbolleisten müssen beschriftet werden, wenn es mehr als eine Symbolleiste gibt

Wenn Sie mehr als eine Symbolleiste in einer Webanwendung mit der ARIA `toolbar` Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribut verwenden, um jede zu beschriften, damit sie von unterstützenden Technologien beschrieben werden kann. Es ist gute Praxis, eine Symbolleiste zu beschriften, selbst wenn nur eine pro Seite vorhanden ist.

### Siehe auch

- [W3C ARIA Toolbar-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Nutzer präsentiert werden, haben eine Textalternative, die denselben Zweck erfüllt, außer in den oben genannten Situationen.
- [2.4.4 Link-Zweck (im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder aus dem Linktext zusammen mit seinem programmatisch bestimmten Linkkontext bestimmt werden, es sei denn, der Zweck des Links wäre für die Nutzer im Allgemeinen mehrdeutig.
- [2.4.9 Link-Zweck (nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Eine Mechanismus steht zur Verfügung, um den Zweck jedes Links allein aus dem Linktext zu identifizieren, es sei denn, der Zweck des Links wäre für die Nutzer im Allgemeinen mehrdeutig.
