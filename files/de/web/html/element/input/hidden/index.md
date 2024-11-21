---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die beim Absenden eines Formulars nicht von Benutzern gesehen oder bearbeitet werden können. Beispielsweise die ID des Inhalts, der derzeit bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Versteckte Eingaben sind auf der gerenderten Seite völlig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Versteckte Eingaben können nicht einmal mit JavaScript fokussiert werden (z.B. `hiddenInput.focus()`).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) des {{HTMLElement("input")}}-Elements enthält einen String, der die versteckten Daten enthält, die beim Absenden des Formulars an den Server gesendet werden sollen. Dieser speziell kann nicht vom Benutzer über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie den Wert über Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Obwohl der Wert dem Benutzer nicht im Seiteninhalt angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen eines Browsers oder der Funktion "Quelltext anzeigen" bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist tatsächlich eines der gemeinsamen Attribute, aber es hat eine besondere Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch übermittelt wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem auf die Zeichencodierung gesetzten Wert gemeldet, die zum Übermitteln des Formulars verwendet wurde.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, zusammen mit dem Formular, wenn es an den Server übermittelt wird. Schauen wir uns einige Beispiele an, die seine Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen versteckter Eingaben besteht darin, zu verfolgen, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular übermittelt wird. Ein typischer Workflow sieht so aus:

1. Der Benutzer entscheidet sich, einen Inhalt zu bearbeiten, über den er die Kontrolle hat, z.B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Bearbeitungstaste drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung übermittelt der Benutzer das Formular, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hier ist, dass während Schritt 2 die ID des zu aktualisierenden Eintrags in einer versteckten Eingabe gespeichert wird. Wenn das Formular in Schritt 3 übermittelt wird, wird die ID automatisch zusammen mit dem Inhalt des Eintrags an den Server gesendet. Die ID lässt die serverseitige Komponente der Website genau wissen, welcher Eintrag mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel dafür finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, um die Sicherheit der Website zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie z.B. ein Formular auf seiner Bankwebsite, um etwas Geld auf ein anderes Konto zu überweisen, das ihm zur Verfügung gestellte Geheimnis nachweist, dass er ist, wer er vorgibt zu sein, und dass er das richtige Formular verwendet, um die Überweisungsanfrage zu übermitteln.

Dies würde einen böswilligen Benutzer daran hindern, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an ahnungslose Benutzer zu senden, um sie dazu zu verleiten, Geld an die falsche Stelle zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; nahezu jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer versteckten Eingabe macht es nicht von Natur aus sicher. Die Zusammensetzung und Codierung des Schlüssels würde dies tun. Der Wert der versteckten Eingabe besteht darin, das Geheimnis mit den Daten zu assoziieren und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der beschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir eine einfache Version des oben beschriebenen Bearbeitungsformulars (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)) implementieren könnten, wobei eine versteckte Eingabe verwendet wird, um die ID des bearbeiteten Eintrags zu speichern.

Das HTML des Bearbeitungsformulars könnte etwa so aussehen:

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Information verwenden, wenn das Formular zurückgegeben wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Im Inhalt ist kein Skript erforderlich, um dies zu bearbeiten.

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) und auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Beim Absenden sieht die an den Server gesendete Formulardaten etwa so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht gesehen werden kann, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert der versteckten Daten darstellt, die Sie an den Server zurückgeben möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die `HTMLInputElement`-Schnittstelle, auf der es basiert
