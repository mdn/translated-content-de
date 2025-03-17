---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Es gibt viele Situationen, in denen einem Steuerelement, Dialogfeld oder einer anderen Website-Funktion ein beschreibender Name oder ein Label gegeben werden sollte, um Nutzern von unterstützenden Technologien zu ermöglichen, deren Zweck zu verstehen und sie korrekt zu bedienen. Es gibt verschiedene Problemarten in dieser Kategorie, die in unterschiedlichen Kontexten auftreten, und jede hat ihre eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das Alt-Attribut, um Bereichselemente zu beschriften, die das href-Attribut haben

Geben Sie in Bildbereichen jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, wohin die Bereiche verlinken. Bei einem Versäumnis wird eine Bildkarte für Nutzer von unterstützenden Technologien schwer nutzbar — sie benötigen Alternativtext, um den Zweck eines Bildes verstehen zu können.

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

Sehen Sie sich die Referenzseite zum [`<area>`-Element](/de/docs/Web/HTML/Element/area) für ein interaktives Live-Beispiel an.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet sein

Geben Sie jedem Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modaler Dialog, der den Benutzer auffordert, eine Wahl zu treffen oder auf eine Aktion zu reagieren), ein beschreibendes Label oder einen Namen, damit Nutzer von unterstützenden Technologien leicht entdecken können, was sein Zweck ist.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) gekennzeichnet; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, um eine Beschriftung bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein Dialogfeld, das mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet wurde.

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

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Beschriftungstext zu enthalten:

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

- [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [WAI-ARIA: Dialogrolle](https://www.w3.org/TR/wai-aria-1.2/#dialog)
- [Dialogverfasserpraktiken](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedes HTML-Dokument ein {{htmlelement("title")}} aufzunehmen, das den Zweck der Seite beschreibt. Eine übliche Navigationstechnik für Nutzer von unterstützenden Technologien besteht darin, den Inhalt einer Seite anhand ihres Titels zu erschließen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite durchsuchen, um den Inhalt zu ermitteln, was ein zeitraubender und potenziell verwirrender Vorgang sein kann.

### Beispiele

Der Titel für den Referenzartikel über das {{htmlelement("title")}}-Element lautet wie folgt:

```html
<title>
  &lt;title&gt;: The Document Title element - HTML: Hypertext Markup Language |
  MDN
</title>
```

Ein weiteres Beispiel könnte so aussehen:

```html
<title>Fill in your details to register — myGov services</title>
```

Um dem Benutzer zu helfen, können Sie den Seitentitel aktualisieren, um bedeutende Zustandsänderungen der Seite widerzuspiegeln (wie z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet werden

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Global_attributes/title)-Attribut haben, das den eingebetteten Inhalt beschreibt. Dies schließt die {{htmlelement("embed")}}- und {{htmlelement("object")}}-Elemente ein. Diese Elemente werden häufig für graphische Inhalte verwendet, ähnlich wie das {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Nutzern von unterstützenden Technologien, zu verstehen, was das Element anzeigt.

## Figuren mit optionalen Beschriftungen sollten beschriftet werden

Für die beste Barrierefreiheit sollte innerhalb eines {{HTMLElement("figure")}}-Elements ein {{HTMLElement("figcaption")}} hinzugefügt werden, auch wenn das technisch gesehen optional ist. Die Beschriftung ergänzt alle alternativen Texte zu Bildern innerhalb der Figur. Die Beschriftung beschreibt den Zweck der Figur im Dokument, was sich von der Beschreibung eines visuellen Elements, wie sie der alternative Text bietet, unterscheiden kann.

### Beispiel

Das folgende Beispiel zeigt den Code für eine Figur mit einer Beschriftung. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Erscheinungsbild des Bildes; die {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall der lateinische Name der Blume im Bild).

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

## Verwenden Sie ein Legende, um ein Fieldset zu beschriften

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element zusammenfassen, sollten Sie ein eingebettetes {{htmlelement("legend")}}-Element innerhalb davon hinzufügen, das eine klare Beschreibung der Gruppe enthält.

Nutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, wenn sie versuchen herauszufinden, was der allgemeine Zweck der Gruppe ist. Ohne die Legende müssten sie um die einzelnen Kontrollelemente des Formulars in der Gruppe navigieren, um eine Vorstellung von dem allgemeinen Zweck zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine Live-, interaktive Version dieses Beispiels auf der [`<fieldset>`-Referenzseite](/de/docs/Web/HTML/Element/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das deren Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente und jegliches Element mit der [`switch` ARIA-Role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in welchem Fall die Zuordnung zwischen dem Formularelement und dem Label aus der Struktur ersichtlich ist. Alternativ können Sie eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement herstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

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

Neben einem {{htmlelement("label")}} für jedes Formularelement sollten diese Labels sichtbar sein, nicht versteckt. Sichtbare Labels helfen _allen_ Nutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer zu tippen beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, obsolet gewordene {{htmlelement("frame")}}, müssen einen Titel haben, um den Inhalt des Frames zu beschreiben. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in der Zukunft von Browsern entfernt werden. Darüber hinaus ist es für Screenreader schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für die beste Barrierefreiheit und zukünftige Wartung sollten Sie alle Seiten umgestalten, die Frames verwenden, um CSS zu verwenden, um ein ähnliches Layout zu erreichen.

Als bewährte Praxis sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzustimmen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des `title`-Elements des eingeschlossenen Dokuments. Es ist am sichersten und zugänglichsten, wenn in beiden Stellen derselbe Titel angegeben wird.

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

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Text enthalten und nicht versteckt sind, etwa mit CSS `display:none` oder `aria-hidden=true`. Nutzern von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Vergewissern Sie sich auch, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Element/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als Abkürzung, um Text hervorzuheben. Nutzer von Screenreadern "überfliegen" eine Seite typischerweise anhand ihrer Überschriften, ähnlich wie sehende Nutzer; Nicht-Überschriftstext, der mit Überschriftselementen ausgezeichnet ist, kann Verwirrung stiften.

## Überschriften sollten sichtbare Textinhalte haben

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Text enthalten und nicht versteckt sind, zum Beispiel mit CSS `display:none` oder `aria-hidden=true`. Nutzer von Screenreadern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte auszuzeichnen.

## Verwenden Sie das Title-Attribut, um `<iframe>`-Inhalt zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, um den Inhalt des Frames zu beschreiben. Ohne einen Titel müssen Nutzer von unterstützenden Technologien in den Frame navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als bewährte Praxis sollten Sie auch ein {{htmlelement("title")}} für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; wenn nicht, versuchen Sie, das `title`-Attribut des Frames mit dem Titel des Dokuments abzustimmen.) Einige Screenreader ersetzen den Inhalt des `title`-Attributs durch den Inhalt des `title`-Elements des eingeschlossenen Dokuments. Es ist am sichersten und zugänglichsten, wenn in beiden Stellen derselbe Titel angegeben wird.

## Inhalt mit Bildern muss beschriftet werden

Stellen Sie beschreibenden Text für alle inhaltlichen (d.h. nicht dekorativen) Bilder und bildähnlichen Elemente bereit. Dies schließt SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente ein sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen der `type` mit `image/` beginnt. Die typische Methode hierfür ist das `alt`-Attribut. Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element für Benutzer gedacht ist, damit sie es nutzen, sollte es ein Label haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und alle Elemente, die einen Handler für Maus- oder Tastaturereignisse haben. Die Art der Beschriftung eines Elements hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente liefert typischerweise der Textinhalt des Elements das Label. Wenn keine andere Option existiert, um ein Element zu kennzeichnen, verwenden Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

## Verwenden Sie das Label-Attribut bei Optgroup-Elementen

Verwenden Sie in einem {{htmlelement("optgroup")}}-Element das `label`-Attribut, um die Gruppe zu beschreiben, damit unterstützende Technologien darauf für ihre Nutzer zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut an den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe der Optionen.

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

Wenn Sie mehr als eine Symbolleiste in einer Webanwendung mit der ARIA `toolbar`-Rolle definieren, müssen Sie das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwenden, um jede zu beschriften, sodass sie von unterstützenden Technologien beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, auch wenn nur eine pro Seite vorhanden ist.

### Siehe auch

- [W3C ARIA-Symbolleistenbeispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
  - : Alle nicht-textuellen Inhalte, die dem Benutzer präsentiert werden, haben ein textliches Äquivalent, das denselben Zweck erfüllt, außer den in dem obigen Link aufgelisteten Situationen.
- [2.4.4 Linkzweck (im Kontext) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder in Verbindung mit dem programmatisch ermittelbaren Link-Kontext bestimmt werden, außer dort, wo der Zweck des Links für Nutzer im Allgemeinen mehrdeutig wäre.
- [2.4.9 Linkzweck (nur Link) (AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only)
  - : Es steht ein Mechanismus zur Verfügung, der es ermöglicht, den Zweck jedes Links anhand des Linktexts allein zu identifizieren, außer wenn der Zweck des Links allgemein für Nutzer mehrdeutig wäre.
