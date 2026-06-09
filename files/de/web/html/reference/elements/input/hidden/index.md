---
title: '`<input type="hidden">` HTML-Attributwert'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die nicht von Benutzern gesehen oder geändert werden können, wenn ein Formular übermittelt wird. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein eindeutiges Sicherheitstoken. Verborgene Eingaben sind vollständig unsichtbar auf der gerenderten Seite, und es gibt keine Möglichkeit, sie im Inhalt der Seite sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht fokussiert werden, auch nicht mit JavaScript (z. B. `hiddenInput.focus()`).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die die versteckten Daten enthält, die Sie beim Absenden des Formulars an den Server übermitteln möchten. Diese können vom Benutzer über die Benutzeroberfläche nicht bearbeitet oder gesehen werden, obwohl Sie den Wert über die Entwicklertools des Browsers bearbeiten könnten.

> [!WARNING]
> Obwohl der Wert dem Benutzer nicht im Seiteninhalt angezeigt wird, ist er sichtbar und kann mit den Entwicklertools oder der "Seitenquelltext anzeigen"-Funktion jedes Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemein sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist tatsächlich eines der allgemeinen Attribute, aber es hat eine besondere Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei versteckten Eingaben genauso wie bei jeder anderen Eingabe. Wenn jedoch das Formular übermittelt wird, wird eine verborgene Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichencodierungsschemas übermittelt, das zur Übermittlung des Formulars verwendet wurde.

## Verwendung versteckter Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular an den Server übermittelt wird. Sehen wir uns einige Beispiele an, die die Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen für versteckte Eingaben besteht darin, nachzuverfolgen, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular übermittelt wird. Ein typischer Ablauf sieht so aus:

1. Der Benutzer entscheidet sich, Inhalte zu bearbeiten, über die er Kontrolle hat, wie z.B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er den Bearbeitungsknopf drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung übermittelt der Benutzer das Formular und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hier ist, dass während Schritt 2 die ID des aktualisierten Eintrags in einer verborgenen Eingabe gespeichert wird. Wenn das Formular in Schritt 3 übermittelt wird, wird die ID automatisch mit dem Inhalte des Eintrags an den Server gesendet. Die ID ermöglicht es der serverseitigen Komponente der Seite genau zu wissen, welcher Eintrag mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) weiter unten.

### Verbesserung der Sicherheit von Websites

Verdeckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Secrets_ zu speichern und zu übermitteln, um die Sicherheit von Websites zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein empfindliches Formular ausfüllt, wie z.B. ein Formular auf seiner Bankwebsite, um Geld auf ein anderes Konto zu überweisen, das Secret, mit dem er arbeiten würde, beweisen würde, dass er derjenige ist, für den er sich ausgibt, und dass er das richtige Formular benutzt, um die Überweisungsanfrage zu übermitteln.

Dies würde einen bösartigen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an nichtsahnende Benutzer zu senden, um sie zu überlisten, Geld an die falsche Stelle zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; fast jedes seriöse serverseitige Framework verwendet verborgene Secrets, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Secrets in einer versteckten Eingabe macht es an sich nicht sicher. Die Zusammensetzung und Kodierung des Schlüssels würde dies tun. Der Wert der versteckten Eingabe besteht darin, das Secret mit den Daten zu verknüpfen und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Secrets verwenden, um Ihre Website wirklich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Sehen wir uns an, wie wir eine Version des Bearbeitungsformulars implementieren könnten, das wir zuvor beschrieben haben (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Eintrags zu speichern.

Das HTML des Bearbeitungsformulars könnte in etwa so aussehen:

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor er das Formular an den Browser des Benutzers sendet, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit modifizierten Informationen aktualisiert werden muss. Kein Skripting ist erforderlich, um dies im Inhalt zu handhaben.

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html) und führen Sie es auch [direkt aus](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Beim Absenden sieht die an den Server gesendete Formulardaten in etwa so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht zu sehen ist, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie zurück an den Server übermitteln möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
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
