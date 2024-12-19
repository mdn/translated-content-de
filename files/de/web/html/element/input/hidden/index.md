---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die bei der Übermittlung eines Formulars weder gesehen noch von Benutzern verändert werden können. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Versteckte Eingaben sind auf der gerenderten Seite vollständig unsichtbar und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Versteckte Eingaben können nicht einmal mit JavaScript fokussiert werden (z.B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen Zeichenfolgenwert, der die versteckten Daten beinhaltet, die Sie beim Senden des Formulars an den Server einfügen möchten. Dieser Wert kann nicht über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie ihn über die Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Auch wenn der Wert im Seiteninhalt nicht angezeigt wird, ist er sichtbar—und kann bearbeitet werden—über die Entwicklerwerkzeuge oder die "Seitencode anzeigen"-Funktionalität eines jeden Browsers. Verlassen Sie sich nicht auf `hidden` Inputs als eine Form der Sicherheit.

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden` Inputs die folgenden Attribute.

### name

Dieses ist tatsächlich eines der gemeinsamen Attribute, aber es hat eine spezielle Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei versteckten Eingaben genau wie bei jeder anderen Eingabe. Wenn jedoch das Formular übermittelt wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichensatzes, der zur Übermittlung des Formulars verwendet wurde, übermittelt.

## Verwendung versteckter Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einfügen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular an den Server übermittelt wird. Schauen wir uns einige Beispiele an, die die Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Einer der häufigsten Verwendungszwecke für versteckte Eingaben ist das Verfolgen, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular übermittelt wird. Ein typischer Arbeitsablauf sieht folgendermaßen aus:

1. Der Benutzer entscheidet sich, einen Inhalt zu bearbeiten, über den er Kontrolle hat, z. B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Bearbeitungstaste drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung übermittelt der Benutzer das Formular, und die aktualisierten Daten werden zur Aktualisierung in die Datenbank an den Server zurückgesandt.

Die Idee ist, dass während Schritt 2 die ID des Datensatzes, der aktualisiert wird, in einer versteckten Eingabe gespeichert wird. Wenn das Formular in Schritt 3 übermittelt wird, wird die ID automatisch zusammen mit dem Inhalt des Datensatzes an den Server gesendet. Die ID ermöglicht es dem serverseitigen Bestandteil der Website, genau zu wissen, welcher Datensatz mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie das aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _secrets_ zu speichern und zu übermitteln, um die Sicherheit der Website zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, z. B. ein Formular auf ihrer Bankwebsite, um Geld auf ein anderes Konto zu überweisen, das Geheimnis, das ihnen zur Verfügung gestellt wird, beweisen würde, dass sie die Person sind, die sie sagen, dass sie sind, und dass sie das richtige Formular verwenden, um die Überweisungsanfrage zu übermitteln.

Dies würde einen böswilligen Benutzer daran hindern, ein gefälschtes Formular zu erstellen, das vorgibt eine Bank zu sein, und das Formular an nichtsahnende Benutzer zu senden, um sie dazu zu verleiten, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross-Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; fast jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer versteckten Eingabe macht es an sich nicht sicher. Die Zusammensetzung und Kodierung des Schlüssels würden dies tun. Der Wert der versteckten Eingabe besteht darin, das Geheimnis mit den Daten zu verknüpfen und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Um Ihre Website tatsächlich zu sichern, müssen Sie gut gestaltete Geheimnisse verwenden.

## Validierung

Versteckte Eingaben nehmen nicht an der Validierung von Einschränkungen teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir eine einfache Version des Bearbeitungsformulars implementieren könnten, das wir zuvor beschrieben haben (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu speichern.

Der HTML-Code des Bearbeitungsformulars könnte etwa so aussehen:

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

Lassen Sie uns auch etwas CSS hinzufügen:

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und würde diese Information nutzen, um zu wissen, welcher Datensatz der Datenbank mit den modifizierten Informationen aktualisiert werden soll, wenn das Formular zurückgegeben wird. Es ist kein Skripting im Inhalt erforderlich, um dies zu handhaben.

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Beim Absenden sieht die an den Server gesendete Formulardaten wie folgt aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht gesehen werden kann, wird ihr Daten trotzdem übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server zurücksenden möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
