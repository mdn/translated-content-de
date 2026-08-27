---
title: '`<input type="image">` HTML-Attributwert'
short-title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{HTMLElement("input")}} Elemente des Typs **`image`** werden verwendet, um grafische Senden-Buttons zu erstellen, d.h. Senden-Buttons, die die Form eines Bildes annehmen, anstatt Text.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Sign in to your account:</p>

<div>
  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Login"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zum anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut liefert eine alternative Zeichenkette, die als Bezeichnung für den Button verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User-Agents")}}, der keine Bilder anzeigen kann oder konfiguriert ist, diese nicht anzuzeigen, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Wenn vorhanden, muss es eine nicht-leere Zeichenkette sein, die als Beschriftung für den Button geeignet ist.

Beispielsweise, wenn Sie einen grafischen Button haben, der ein Bild mit einem Icon und/oder dem Text "Login Now" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Login Now` setzen.

> [!NOTE]
> Auch wenn das `alt`-Attribut technisch optional ist, sollten Sie immer eines einschließen, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktionell arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut auf dem {{HTMLElement("form")}}-Element, das der Besitzer des {{HTMLElement("input")}} ist.

Dieses Attribut ist auch verfügbar auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette nach dem {{Glossary("Percent-encoding", "Percent-Encoding")}} des Textes mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API zur Verwaltung der Daten, was es ermöglicht, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` enthält ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)).
- `text/plain`
  - : Nur als Klartext nützlich für Debugging-Zwecke, sodass Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des Formulars, das das Element besitzt.

Dieses Attribut ist auch verfügbar auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut des Formulars, das das Element besitzt. Zulässige Werte sind:

- `get`
  - : Eine URL wird aufgebaut, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut angegeben ist, gefolgt von einem Fragezeichen ("?") und dann den Formulardaten, codiert wie beschrieben durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des Formulars. Diese URL wird dann an den Server gesendet, indem eine HTTP-{{HTTPMethod("get")}}-Anfrage verwendet wird. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Daten des Formulars werden im Hauptteil der Anforderung enthalten, die an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut angegebene URL gesendet wird, indem eine HTTP-{{HTTPMethod("post")}}-Anfrage verwendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch verfügbar auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen.

### formnovalidate

Ein Boolesches Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attributs des Formulars, das das Element besitzt.

Dieses Attribut ist auch verfügbar auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing Context** sein (das ist, ein Tab, ein Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) Attribut des {{HTMLElement("form")}} angegeben ist, das diese Eingabe besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing Context wie der, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben wird.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing Context. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing Context des aktuellen. Wenn es keinen übergeordneten Context gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing Context; dies ist der Browsing Context, der der oberste Vorfahre des aktuellen Contexts ist. Wenn der aktuelle Context der oberste ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch verfügbar auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen.

### height

Eine Nummer, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung des grafischen Senden-Buttons angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Nummer, die die Breite angibt, in der das Bild gezeichnet werden soll, in CSS-Pixeln.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkartenelements sein, {{HTMLElement("map")}}, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist obsolet; Sie sollten zum Einsatz des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Image-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetzenes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird), das sich ähnlich verhält wie ein übliches {{htmlelement("img")}}-Element, aber mit den Fähigkeiten eines [Senden-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Funktionen von Bild-Inputs

Lassen Sie uns ein einfaches Beispiel betrachten, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau so wie auf dem `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://mdn.github.io/shared-assets/images/examples/login-button.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut liefert Alternativtext für das Bild, sodass Bildschirmleser-Nutzer eine bessere Vorstellung davon bekommen können, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Falls möglich, verwenden Sie Text, der mit der Beschriftung übereinstimmt, die Sie verwenden würden, wenn Sie einen Standard-Senden-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, die das Bild in Pixeln angezeigt werden soll. Der Button ist so groß wie das Bild; wenn Sie die Trefferfläche des Buttons größer als das Bild machen müssen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem, wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Standardformulareigenschaften überschreiben

`<input type="image">`-Elemente — wie reguläre [Senden-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Reihe von Attributen akzeptieren, die die Standardeigenschaften von Formularen überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Elements.
- `formenctype`
  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Elements.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu senden. Mögliche Werte sind:
    - `post`: Die Daten des Formulars werden im Hauptteil des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten des Formulars werden der **`form`**-Attribut-URI hinzugefügt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Elements.

- `formnovalidate`
  - : Ein Boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Elements.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies ist ein Name oder ein Schlüsselwort für einen _Browsing Context_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Elements. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Laden Sie die Antwort in denselben Browsing Context wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Browsing Context.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing Context des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing Context (das heißt, der Browsing Context, der ein Vorfahr des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mithilfe eines Buttons einreichen, der mit `<input type="image">` erstellt wurde, werden dem Server automatisch zwei zusätzliche Datenpunkte vom Browser übermittelt — `x` und `y`. Sie können dies in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-xy-coords/) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, sehen Sie, dass die Daten als Parameter an die URL angehängt werden, wie `?x=52&y=55`. Wenn die Image-Eingabe ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, dann wird der angegebene Name jedem Koordinateneintrag mit einem Punkttrennzeichen vorangestellt. Wenn der `name` zum Beispiel `position` wäre, würden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert sein.

Dies sind die X- und Y-Koordinaten des Bildes, die von der Maus angeklickt wurden, um das Formular zu übermitteln, wobei (0,0) die obere linke Ecke des Bildes ist und dies die Standardeinstellung ist, falls die Einreichung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, die das Bild angeklickt wurde, von Bedeutung ist. Wenn Sie zum Beispiel eine Karte haben, die bei einem Klick die angeklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welche Position angeklickt wurde und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe anhand der übermittelten Koordinaten angeklickt wurde, und eine Aufzeichnung der bevorzugten Farben führt, für die die Leute gestimmt haben.

### Anpassung der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dadurch können Sie einen Rahmen für das Bild mit den `width`- und `height`-Attributen festlegen, um Platz im Layout zu reservieren, und dann festlegen, wo innerhalb dieses Raums das Bild platziert wird und wie (oder ob) es skaliert wird, um diesen Raum zu füllen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, aber im Kontext eines typischen Anmeldeformulars.

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
      src="https://mdn.github.io/shared-assets/images/examples/login-button.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas CSS, um die grundlegenden Elemente ordentlicher zu platzieren:

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

#### Ergebnis

{{ EmbedLiveSample('A_login_form', 600, 170) }}

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und Positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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
      src="https://mdn.github.io/shared-assets/images/examples/login-button.png"
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
  background-color: #dddddd;
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

Hier ist `object-position` konfiguriert, um das Bild in der oberen rechten Ecke des Elements zu zeichnen, während `object-fit` auf `contain` eingestellt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Rahmen des Elements passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der noch in dem Bereich sichtbar ist, der nicht vom Bild bedeckt ist.

## Technische Übersicht

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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formtarget"><code>formtarget</code></a>
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Skalierung des Bildes innerhalb des Rahmens des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
