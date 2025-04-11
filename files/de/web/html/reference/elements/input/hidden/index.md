---
title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzufügen, die nicht gesehen oder von Benutzern geändert werden können, wenn ein Formular abgeschickt wird. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Verborgene Eingaben sind auf der gerenderten Seite komplett unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können auch nicht durch JavaScript (z. B. `hiddenInput.focus()`) fokussiert werden.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge mit den verborgenen Daten, die beim Abschicken des Formulars an den Server einbezogen werden sollen. Dieses kann speziell nicht über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie den Wert über Entwickler-Tools im Browser bearbeiten könnten.

> [!WARNING]
> Während der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er sichtbar und kann mit den Entwickler-Tools eines Browsers oder der "Quelltext anzeigen"-Funktion bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als Sicherheitsmaßnahme.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der gemeinsamen Attribute, hat aber eine besondere Bedeutung für verborgene Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei verborgenen Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch abgeschickt wird, wird eine verborgene Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichensatzes, der zum Abschicken des Formulars verwendet wird, gemeldet.

## Verwendung von verborgenen Eingaben

Wie oben erwähnt, können verborgene Eingaben überall dort verwendet werden, wo Sie Daten einfügen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular an den Server übermittelt wird. Schauen wir uns einige Beispiele an, die dessen Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen von versteckten Eingaben ist die Nachverfolgung, welcher Datensatz in der Datenbank aktualisiert werden muss, wenn ein Bearbeitungsformular abgeschickt wird. Ein typischer Arbeitsablauf sieht so aus:

1. Der Benutzer entscheidet sich, einige Inhalte zu bearbeiten, über die er die Kontrolle hat, wie z. B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Bearbeitungstaste drückt.
2. Die zu bearbeitenden Inhalte werden aus der Datenbank entnommen und in ein HTML-Formular geladen, um dem Benutzer Änderungen zu ermöglichen.
3. Nach der Bearbeitung schickt der Benutzer das Formular ab, und die aktualisierten Daten werden an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee ist, dass während Schritt 2 die ID des Datensatzes, der aktualisiert wird, in einer verborgenen Eingabe gehalten wird. Wenn das Formular in Schritt 3 abgeschickt wird, wird die ID zusammen mit den Datensatzinhalten automatisch an den Server gesendet. Die ID lässt die serverseitige Komponente der Seite genau wissen, welcher Datensatz mit den gesendeten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im [Beispiele](#beispiele)-Abschnitt unten.

### Verbesserung der Website-Sicherheit

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, mit dem Ziel, die Sicherheit der Website zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie ein Formular auf ihrer Bankwebsite, um Geld auf ein anderes Konto zu überweisen, das Geheimnis, das ihnen bereitgestellt wird, beweisen würde, dass sie die Person sind, die sie vorgeben zu sein, und dass sie das korrekte Formular verwenden, um den Überweisungsantrag einzureichen.

Dies würde einen böswilligen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, so zu tun, als sei er eine Bank, und das Formular an ahnungslose Benutzer zu senden, um sie dazu zu bringen, Geld an die falsche Stelle zu überweisen. Dieser Angriffsart wird als [Cross-Site-Request-Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; nahezu jedes renommierte serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Die Platzierung des Geheimnisses in einer verborgenen Eingabe macht es per se nicht sicher. Die Zusammensetzung und Verschlüsselung des Schlüssels würden das tun. Der Wert der verborgenen Eingabe liegt darin, dass er das Geheimnis mit den Daten verknüpft und es automatisch einbezieht, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Constraints-Validierung teil; sie haben keinen realen Wert, der eingeschränkt werden muss.

## Beispiele

Schauen wir uns an, wie wir eine Version des oben beschriebenen Bearbeitungsformulars (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)) implementieren könnten, wobei eine verborgene Eingabe genutzt wird, um sich die ID des bearbeiteten Datensatzes zu merken.

Die HTML-Struktur des Bearbeitungsformulars könnte etwa so aussehen:

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

Der Server würde den Wert der verborgenen Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Informationen verwenden, wenn das Formular zurückgeschickt wird, um zu wissen, welcher Datensatz in der Datenbank mit den geänderten Informationen aktualisiert werden soll. Es ist kein Skripting im Inhalt erforderlich, um dies zu handhaben.

Das Ergebnis sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können auch das Beispiel auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn das Formular abgeschickt wird, sieht die an den Server gesendete Formulardaten so aus:

`title=Mein+hervorragender+Blogbeitrag&content=Dies+ist+der+Inhalt+meines+hervorragenden+Blogbeitrags.+Ich+hoffe,+Sie+genießen+ihn!&postId=34657`

Obwohl die verborgene Eingabe überhaupt nicht gesehen werden kann, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert der versteckten
        Daten repräsentiert, die Sie an den Server übermitteln möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [Leitfaden zu HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
