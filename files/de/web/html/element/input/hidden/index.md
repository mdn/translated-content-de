---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die nicht angezeigt oder von Benutzern geändert werden können, wenn ein Formular gesendet wird. Zum Beispiel die ID des aktuell bestellten oder bearbeiteten Inhalts oder ein einzigartiger Sicherheitstoken. Verborgene Eingaben sind auf der gerenderten Seite vollständig unsichtbar und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht fokussiert werden, auch nicht mittels JavaScript (z.B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die die versteckten Daten enthält, die beim Senden des Formulars an den Server eingeschlossen werden sollen. Diese Daten können vom Benutzer über die Benutzeroberfläche nicht bearbeitet oder eingesehen werden, obwohl der Wert über die Entwicklertools des Browsers bearbeitet werden könnte.

> [!WARNING]
> Obwohl der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er sichtbar und kann mit den Entwicklertools eines beliebigen Browsers oder der Funktion "Seitenquelltext anzeigen" bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als Sicherheitsmaßnahme.

## Zusätzliche Attribute

Zusätzlich zu den für alle {{HTMLElement("input")}}-Elemente üblichen Attributen bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der allgemeinen Attribute, hat aber eine besondere Bedeutung für verborgene Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei verborgenen Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch gesendet wird, wird eine verborgene Eingabe mit dem `name`-Wert `_charset_` automatisch mit dem bei der Formularübermittlung verwendeten Zeichenencoding gemeldet.

## Verwendung von verborgenen Eingaben

Wie oben erwähnt, können verborgene Eingaben überall dort verwendet werden, wo Daten eingeschlossen werden sollen, die der Benutzer nicht sieht oder bearbeitet, wenn das Formular an den Server gesendet wird. Betrachten wir einige Beispiele, die ihre Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen für verborgene Eingaben ist die Nachverfolgung, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular gesendet wird. Ein typischer Arbeitsablauf sieht folgendermaßen aus:

1. Der Benutzer entscheidet sich, einige Inhalte zu bearbeiten, über die er Kontrolle hat, z.B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Schaltfläche zum Bearbeiten drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und zur Bearbeitung in ein HTML-Formular geladen.
3. Nach der Bearbeitung sendet der Benutzer das Formular ab, und die aktualisierten Daten werden zur Aktualisierung in der Datenbank an den Server gesendet.

Die Idee hier ist, dass während Schritt 2 die ID des zu aktualisierenden Eintrags in einer verborgenen Eingabe gespeichert wird. Wenn das Formular in Schritt 3 gesendet wird, wird die ID zusammen mit den Inhalt des Eintrags automatisch an den Server gesendet. Die ID teilt der serverseitigen Komponente der Website mit, welcher Eintrag mit den gesendeten Daten aktualisiert werden muss.

Sie können ein vollständiges Beispiel dafür im Abschnitt [Beispiele](#beispiele) unten sehen.

### Verbesserung der Website-Sicherheit

Verborgene Eingaben werden auch verwendet, um Sicherheitsschlüssel oder -geheimnisse zu speichern und zu übermitteln, um die Sicherheit der Website zu verbessern. Die grundlegende Idee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie z.B. ein Formular auf seiner Bankwebsite, um Geld auf ein anderes Konto zu überweisen, ihm ein Geheimnis zur Verfügung gestellt werden würde, um zu beweisen, dass er der ist, der er vorgibt zu sein, und dass er das richtige Formular verwendet, um die Überweisungsanfrage abzusenden.

Dies würde einen böswilligen Benutzer daran hindern, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an ahnungslose Benutzer zu senden, um sie dazu zu bringen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet; fast jedes seriöse serverseitige Framework verwendet verborgene Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer verborgenen Eingabe macht es nicht von vornherein sicher. Die Zusammensetzung und Kodierung des Schlüssels würde dies bewirken. Der Wert der verborgenen Eingabe besteht darin, das Geheimnis mit den Daten zu verknüpfen und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Verborgene Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden müsste.

## Beispiele

Schauen wir uns an, wie eine Version des weiter oben beschriebenen Bearbeitungsformulars (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)) implementiert werden kann, indem eine verborgene Eingabe verwendet wird, um die ID des bearbeiteten Eintrags zu speichern.

Das HTML des Bearbeitungsformulars könnte so aussehen:

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

Fügen wir auch etwas CSS hinzu:

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

Der Server würde den Wert der verborgenen Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Es ist kein Skripting im Inhalt erforderlich, um dies zu handhaben.

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn es übermittelt wird, sehen die an den Server gesendeten Formulardaten ungefähr so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die verborgene Eingabe überhaupt nicht zu sehen ist, werden ihre Daten trotzdem übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Wert der versteckten
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
