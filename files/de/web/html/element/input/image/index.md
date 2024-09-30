---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absenden-Schaltflächen zu erstellen, d.h. Schaltflächen, die anstelle von Text die Form eines Bildes haben.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zum anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützen Eingabeschaltflächen des Typs `image` die folgenden Attribute.

### alt

Das `alt`-Attribut bietet einen alternativen Text, der als Beschriftung der Schaltfläche verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines [Benutzeragenten](/de/docs/Glossary/user_agent), der keine Bilder anzeigen kann oder so konfiguriert ist, dass keine Bilder angezeigt werden, oder falls der Benutzer ein Bildschirmlesegerät verwendet). Wenn vorhanden, muss es ein nicht leerer Text sein, der als Beschriftung für die Schaltfläche geeignet ist.

Zum Beispiel, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Symbol und/oder Text "Jetzt anmelden" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines hinzufügen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die bei der Übermittlung der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert und sendet die Formulardaten als String, nachdem der Text mittels eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} prozentkodiert wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht das Übermitteln von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular `<input>`-Elemente vom Typ [`file`](/de/docs/Web/HTML/Element/input#type) [`<input type="file">`] enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur zur Fehlerbehebung nützlich, um die Daten leicht sichtbar zu machen, die übermittelt werden sollen.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Eigentümerformulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die bei der Übermittlung der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das im eigenen Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird, ein Fragezeichen ("?") angefügt und dann die Formulardaten angefügt werden, die entsprechend dem `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars kodiert wurden. Diese URL wird dann unter Verwendung eines HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur [ASCII](/de/docs/Glossary/ASCII)-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Hauptteil der Anfrage aufgenommen, die an die durch `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) angegebene URL gesendet wird, unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode zeigt an, dass die Schaltfläche den Dialog schließt, dem das Eingabeelement zugeordnet ist, und übermittelt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor der Übermittlung an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des Eigentümerformulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontexts** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {{HTMLElement("form")}}-Elements angegeben ist, dem diese Eingabe gehört.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist normalerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des [Benutzeragenten](/de/docs/Glossary/user_agent) unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den auf oberster Ebene befindlichen Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe der zu zeichnenden Abbildung in CSS-Pixeln angibt, wie sie durch das `src`-Attribut spezifiziert ist.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung der grafischen Absenden-Schaltfläche angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Tasteingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, wurde aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkartenelements, {{HTMLElement("map")}}, sein, das eine zu verwendende Bildkarte mit dem Bild definiert. Diese Verwendung ist obsolet; Sie sollten zum {{HTMLElement("img")}}-Element wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bildeingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht durch die CSS-Schicht erzeugt oder direkt verwaltet wird), das sich auf die gleiche Weise wie ein reguläres {{htmlelement("img")}}-Element verhält, jedoch mit den Möglichkeiten einer [Absenden-Schaltfläche](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Merkmale der Bildeingabe

Werfen wir einen Blick auf ein einfaches Beispiel, das alle wesentlichen Merkmale enthält, die Sie verwenden müssten (Diese funktionieren genauso wie auf dem `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zum Bild anzugeben, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alternativtext für das Bild, damit Bildschirmlesegerätebenutzer eine bessere Vorstellung davon bekommen können, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (z. B. wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der mit der Beschriftung übereinstimmt, die Sie verwenden würden, wenn Sie eine standardmäßige Absenden-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width) und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche hat die gleiche Größe wie das Bild; wenn Sie möchten, dass der Trefferbereich der Schaltfläche größer als das Bild ist, müssen Sie CSS verwenden (z. B. {{cssxref("padding")}}). Auch wenn Sie nur eine Dimension festlegen, wird die andere automatisch angepasst, damit das Bild sein ursprüngliches [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beibehält.

### Standardverhalten von Formularen überschreiben

`<input type="image">`-Elemente - wie reguläre [Absenden-Schaltflächen](/de/docs/Web/HTML/Element/input/submit) - können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Der URI eines Programms, das die Informationen verarbeitet, die von dem Eingabeelement übermittelt werden; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulareigners.
- `formenctype`

  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Falls dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulareigners.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu senden. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden im Hauptteil des Formulars aufgenommen und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt, wobei ein '?' als Trennzeichen verwendet wird, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebenwirkungen hat und nur ASCII-Zeichen enthält.

    Falls angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulareigners.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Falls dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulareigners.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wird. Dies ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel ein Tab, Fenster oder Inline-Frame). Falls dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulareigners. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie der aktuelle. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den auf oberster Ebene befindlichen Browsing-Kontext (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich diese Option wie `_self`.

### Verwenden der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche, die mit `<input type="image">` erstellt wurde, übermitteln, werden automatisch zwei zusätzliche Datenpunkte von dem Browser an den Server gesendet - `x` und `y`. Sie können dies in unserem [Beispiel für die X Y-Koordinaten](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, sehen Sie die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn die Bildeingabe ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird, sodass, wenn der `name` `position` ist, die zurückgegebenen Koordinaten im URL-Format als `?position.x=52&position.y=55` formatiert würden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular zu senden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position des Bildes, auf das geklickt wurde, signifikant ist, zum Beispiel könnten Sie eine Karte haben, die beim Klicken die angeklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und liefert Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe anhand der übermittelten Koordinaten angeklickt wurde, und eine Zählung der bevorzugten Farben der Menschen führt, die Menschen gewählt haben.

### Anpassung der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements zu adjustieren, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild unter Verwendung der `width`- und `height`-Attribute festzulegen, um Platz im Layout einzuräumen, und dann anzupassen, wo innerhalb dieses Raums das Bild positioniert ist und wie (oder ob) es skaliert wird, um diesen Raum zu belegen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt dieselbe Schaltfläche wie zuvor, aber im Kontext eines typischen Anmeldeformulars.

{{ EmbedLiveSample('A_login_form', 600, 170) }}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas einfaches CSS, um die Grundelemente ordentlicher zu platzieren:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und -positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

Hier wird `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größtmöglichen Größe, die innerhalb des Rahmens des Elements passt, gezeichnet wird, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der im Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
     <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
