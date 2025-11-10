---
title: Textbeschriftungen und Namen
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: fd60358f242f522accc5f548be62cd79610f8c0f
---

Es gibt viele Situationen, in denen ein Steuerungselement, Dialogfeld oder eine andere Website-Funktion einen beschreibenden Namen oder ein Label erhalten sollte, damit Benutzer von unterstützenden Technologien verstehen, welchen Zweck es erfüllt und wie es korrekt bedient wird. In dieser Kategorie gibt es verschiedene Arten von Problemen, die in unterschiedlichen Kontexten auftreten, und jedes hat seine eigene Lösung. Die verschiedenen Probleme und Lösungen werden in den folgenden Abschnitten besprochen.

## Verwenden Sie das Alt-Attribut, um Bereichselemente zu beschriften, die das href-Attribut haben

Geben Sie in Bildkarten jedem {{htmlelement("area")}}-Element ein `alt`-Attribut, das einen Namen enthält, der beschreibt, auf welche Ressourcen die Bereiche verweisen. Wird dies nicht getan, ist eine Bildkarte für Benutzer von unterstützenden Technologien schwer zu verwenden – sie benötigen Alternativtext, um den Zweck eines Bildes verstehen zu können.

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

Sehen Sie sich das [Referenzseitelement `<area>`](/de/docs/Web/HTML/Reference/Elements/area) für ein interaktives Live-Beispiel an.

### Siehe auch

- {{htmlelement("area")}}
- [H24: Bereitstellung von Textalternativen für die Bereichselemente von Bildkarten](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## Dialoge sollten beschriftet werden

Geben Sie jedem Container, dessen Inhalt als Dialogfeld fungiert (zum Beispiel ein modales Dialogfeld, das den Benutzer auffordert, eine Auswahl zu treffen oder auf eine Aktion zu reagieren), ein beschreibendes Label oder einen Namen, sodass Benutzer von unterstützenden Technologien leicht herausfinden können, welchen Zweck es erfüllt.

Ein Dialogfeld wird im Allgemeinen durch eine ARIA [`role="dialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) oder [`role="alertdialog"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) angezeigt; Sie können die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwenden, um ein Label bereitzustellen.

### Beispiele

Das folgende Beispiel zeigt ein Dialogfeld, das als solches mit `role="dialog"` definiert und mit `aria-labelledby` beschriftet wurde.

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

Wenn das Dialogfeld keine Überschrift hat, können Sie stattdessen `aria-label` verwenden, um den Labeltext zu enthalten:

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
- [Gestaltungspraktiken für Dialoge](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## Dokumente müssen einen Titel haben

Es ist wichtig, in jedem HTML-Dokument ein {{htmlelement("title")}} einzufügen, das den Zweck der Seite beschreibt. Eine gängige Navigationstechnik für Benutzer von unterstützenden Technologien besteht darin, den Inhalt einer Seite zu erschließen, indem sie ihren Titel lesen. Wenn der Titel nicht verfügbar ist, müssen sie die Seite navigieren, um deren Inhalt zu bestimmen, was ein zeitaufwändiger und potenziell verwirrender Prozess sein kann.

### Beispiele

Der Titel des Referenzartikels über das {{htmlelement("title")}}-Element lautet wie folgt:

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

Um dem Benutzer zu helfen, können Sie den Seitentitel aktualisieren, um signifikante Zustandsänderungen der Seite widerzuspiegeln (z. B. Probleme bei der Formularvalidierung):

```html
<title>2 errors — Fill in your details to register — myGov services</title>
```

### Siehe auch

- {{htmlelement("title")}}

## Eingebettete Inhalte müssen beschriftet werden

Stellen Sie sicher, dass Elemente, die Inhalte einbetten, ein [title](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut haben, das die eingebetteten Inhalte beschreibt. Dazu gehören die Elemente {{htmlelement("embed")}} und {{htmlelement("object")}}. Diese Elemente werden oft für grafische Inhalte verwendet, ähnlich dem {{HTMLelement("img")}}-Element. Ein beschreibender Titel hilft Benutzern von unterstützenden Technologien zu verstehen, was das Element zeigt.

## Abbildungen mit optionalen Bildunterschriften sollten beschriftet werden

Für beste Zugänglichkeit fügen Sie innerhalb eines {{HTMLElement("figure")}}-Elements ein {{HTMLElement("figcaption")}} hinzu, obwohl dies technisch gesehen optional ist. Die Bildunterschrift ergänzt jeden Alternativtext zu Bildern innerhalb der Abbildung. Die Bildunterschrift beschreibt den Zweck der Abbildung im Dokument, was sich von einer Beschreibung eines visuellen Elements, wie sie durch den Alternativtext bereitgestellt wird, unterscheiden kann.

### Beispiel

Das folgende Beispiel zeigt Code für eine Abbildung mit einer Bildunterschrift. Das `alt`-Attribut des {{htmlelement("img")}} beschreibt das Aussehen des Bildes; das {{htmlelement("figcaption")}} beschreibt es aus einer funktionalen Perspektive (in diesem Fall den lateinischen Namen der Blume im Bild).

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

## Verwenden Sie eine Legende, um ein Fieldset zu beschriften

Wenn Sie eine Gruppe von Formularelementen mit einem {{htmlelement("fieldset")}}-Element zusammenfassen, sollten Sie ein verschachteltes {{htmlelement("legend")}}-Element darin einfügen, das eine klare Beschreibung der Gruppe enthält.

Benutzer von unterstützenden Technologien finden diese Beschreibung hilfreich, um den Gesamtzweck der Gruppe zu verstehen. Ohne die Legende müssten sie um die einzelnen Formularsteuerungen in der Gruppe navigieren, um eine Idee von dem Gesamtzweck zu bekommen, was zu Verwirrung führen könnte.

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

Sie können eine interaktive Live-Version dieses Beispiels auf der [Referenzseite zum `<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset) sehen.

### Siehe auch

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## Formularelemente müssen beschriftet werden

Alle Elemente innerhalb eines Formulars müssen ein {{htmlelement("label")}} haben, das seinen Zweck identifiziert. Dies gilt für alle Arten von {{htmlelement("input")}}-Elementen sowie {{htmlelement("button")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, {{htmlelement("textarea")}}, {{htmlelement("progress")}} und {{htmlelement("meter")}}-Elemente sowie für jedes Element mit der [`switch`-ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role).

Das Formularelement kann innerhalb des {{htmlelement("label")}} platziert werden, in diesem Fall ist die Zuordnung zwischen dem Formularelement und dem Label aus der Struktur ersichtlich. Oder Sie können eine Zuordnung zwischen einem {{htmlelement("label")}} und einem Formularelement erstellen, indem Sie den `id`-Wert des Formularelements als Wert des `for`-Attributs des Labels angeben.

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

Zusätzlich dazu, dass jedes Formularelement ein {{htmlelement("label")}} hat, sollten diese Labels sichtbar sein, nicht verborgen. Sichtbare Labels helfen _allen_ Benutzern, den Zweck eines Formularelements zu verstehen. Verlassen Sie sich nicht auf Platzhaltertext, da dieser verschwindet, sobald der Benutzer zu tippen beginnt.

## Frame-Elemente müssen beschriftet werden

Frame-Elemente, sowohl {{htmlelement("iframe")}} als auch das ältere, veraltete {{htmlelement("frame")}}, müssen einen Titel haben, der den Inhalt des Frames beschreibt. Verwenden Sie das `title`-Attribut, um ein Frame-Element zu beschriften. Ohne einen Titel müssen Benutzer von unterstützenden Technologien in den Frame hinein navigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Das {{HTMLElement('frame')}}-Element ist nicht mehr Teil der HTML-Spezifikation. Die Unterstützung dafür könnte in Zukunft von Browsern eingestellt werden. Darüber hinaus ist es für Bildschirmleser schwierig, Seiten mit {{HTMLElement('frame')}}-Elementen zu navigieren. Für beste Zugänglichkeit und zukünftige Wartung gestalten Sie alle Seiten, die Frames verwenden, neu, um CSS für ein ähnliches Layout zu verwenden.

Als bewährte Praxis sollten Sie auch ein {{htmlelement("title")}}-Element für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, beide Titel an beiden Stellen bereitzustellen.

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

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, wie etwa mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen.

Stellen Sie außerdem sicher, dass Sie [Überschriftselemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) nur für tatsächliche Abschnittsüberschriften verwenden und nicht als eine schnelle Möglichkeit, um Text hervorzuheben. Benutzer von Bildschirmlesern "überfliegen" eine Seite ähnlich wie sehende Benutzer; nicht-überschirfte Texte, die mit Überschriftselementen ausgezeichnet sind, können Verwirrung stiften.

## Überschriften sollten sichtbaren Textinhalt haben

Stellen Sie sicher, dass Ihre Überschriften nicht leeren Textinhalt haben und nicht versteckt sind, wie etwa mit CSS `display:none` oder `aria-hidden=true`. Benutzer von Bildschirmlesern verlassen sich auf Überschriften, um die Struktur und den Inhalt eines Dokuments zu verstehen. Verwenden Sie keine Überschriftselemente, um Bilder oder andere grafische Inhalte auszuzeichnen.

## Verwenden Sie das Title-Attribut, um `<iframe>`-Inhalte zu beschreiben

Stellen Sie sicher, dass {{htmlelement("iframe")}}-Elemente ein `title`-Attribut haben, das den Inhalt des Frames beschreibt. Ohne einen Titel müssen Benutzer von unterstützenden Technologien in den Frame hineinnavigieren, um zu verstehen, was er enthält, was schwierig und verwirrend sein kann.

Als bewährte Praxis sollten Sie auch ein {{htmlelement("title")}}-Element für das Dokument bereitstellen, das im Frame eingeschlossen ist, mit einem Inhalt, der mit dem `title`-Attribut des Frames identisch ist. (Dies setzt voraus, dass das eingeschlossene Dokument unter Ihrer Kontrolle steht; falls nicht, versuchen Sie das `title`-Attribut des Frames an den Titel des Dokuments anzupassen.) Einige Bildschirmleser ersetzen den Inhalt des `title`-Attributs durch den Inhalt des eingeschlossenen Dokuments {{htmlelement("title")}}. Es ist am sichersten und am zugänglichsten, beide Titel an beiden Stellen bereitzustellen.

## Inhalte mit Bildern müssen beschriftet werden

Stellen Sie beschreibenden Text für alle inhaltlichen (d.h. nicht dekorativen) Bilder und bildähnlichen Elemente bereit. Dies umfasst SVG-Bilder, {{htmlelement("img")}}, {{htmlelement("canvas")}}, {{htmlelement("map")}} und {{htmlelement("area")}}-Elemente sowie {{htmlelement("input")}}-Elemente, bei denen `type=image` und {{htmlelement("object")}}-Elemente, bei denen `type` mit `image/` beginnt. Der übliche Weg hierfür ist das `alt`-Attribut, aber für Elemente, die das `alt`-Attribut nicht zulassen, wie {{htmlelement("canvas")}}, verwenden Sie stattdessen [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Stellen Sie sicher, dass die Beschreibung vermittelt, was im Bild gezeigt wird.

Für `alt`-Attribute auf Bildern, die rein dekorativ _sind_, kann ein leerer Wert verwendet werden, um Hilfswerkzeugen zu signalisieren, dass das Element ignoriert werden sollte.

### Beispiel

```html
<img
  src="milkweed.jgp"
  alt="Black and white close-up photo of milkweed flowers" />
```

## Interaktive Elemente müssen beschriftet werden

Wenn ein Element dazu vorgesehen ist, dass Benutzer damit interagieren, sollte es ein Label haben. Interaktive Elemente umfassen Links ({{htmlelement("a")}}), Formularelemente, Schaltflächen und jedes Element, das einen Mouse- oder Keyboard-Event-Handler hat. Die Art, ein Element zu beschriften, hängt von seinem Typ ab: Für Formularelemente verwenden Sie ein {{htmlelement("label")}}; für Links, Schaltflächen und klickbare Elemente liefert der Textinhalt des Elements typischerweise das Label. Wenn keine andere Möglichkeit besteht, ein Element zu beschriften, verwenden Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut.

## Verwenden Sie das Label-Attribut bei Optgroup-Elementen

In einem {{htmlelement("optgroup")}}-Element verwenden Sie das `label`-Attribut, um die Gruppe zu beschreiben, sodass unterstützende Technologien darauf zugreifen können.

### Beispiel

In diesem Beispiel gibt das `label`-Attribut bei den {{HTMLElement('optgroup')}}-Elementen einen Kategorienamen für die Gruppe der Optionen an.

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

Wenn Sie in einer Webanwendung mehr als eine Symbolleiste mit der ARIA `toolbar`-Rolle definieren, müssen Sie das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwenden, um jede zu beschriften, damit sie von unterstützenden Technologien beschrieben werden kann. Es ist eine gute Praxis, eine Symbolleiste zu beschriften, selbst wenn es pro Seite nur eine gibt.

### Siehe auch

- [W3C ARIA Toolbar-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## Verwandte WCAG-Erfolgskriterien

- [1.1.1 Nicht-Text-Inhalt (A)](https://w3c.github.io/wcag/guidelines/22/#non-text-content)
  - : Alle nicht-textlichen Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die denselben Zweck erfüllt, außer für die in dem obigen Link aufgelisteten Situationen.
- [2.4.4 Link-Zweck (im Kontext) (A)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-in-context)
  - : Der Zweck jedes Links kann allein aus dem Linktext oder in Kombination mit dessen programmgesteuert bestimmtem Linkkontext ermittelt werden, außer dort, wo der Zweck des Links für Benutzer im Allgemeinen mehrdeutig wäre.
- [2.4.9 Link-Zweck (nur der Link) (AAA)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-link-only)
  - : Ein Mechanismus ist verfügbar, um den Zweck jedes Links allein aus dem Linktext zu erkennen, außer dort, wo der Zweck des Links für Benutzer im Allgemeinen mehrdeutig wäre.
