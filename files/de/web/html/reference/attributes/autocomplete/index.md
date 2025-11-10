---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "User-Agent")}} die Erlaubnis hat, automatische Unterstützung bei der Eingabe von Formularfeldern zu leisten. Auch gibt es dem Browser Hinweise darauf, welche Art von Information im Feld erwartet wird.

Es ist verfügbar für {{HTMLElement("input")}}-Elemente, die Text- oder numerische Werte als Eingabe annehmen, {{HTMLElement("textarea")}}-Elemente, {{HTMLElement("select")}}-Elemente und {{HTMLElement("form")}}-Elemente.

{{InteractiveExample("HTML Demo: autocomplete", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input name="firstName" id="firstName" type="text" autocomplete="given-name" />

<label for="lastName">Last Name:</label>
<input name="lastName" id="lastName" type="text" autocomplete="family-name" />

<label for="email">Email:</label>
<input name="email" id="email" type="email" autocomplete="off" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Beschreibung

Das `autocomplete`-Attribut gibt dem User-Agent einen Hinweis, wie oder ob er ein Formularfeld vorausfüllen soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von durch Leerzeichen getrennten Token.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<textarea autocomplete="shipping street-address"></textarea>
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **Formularbesitzers** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Der Besitzer ist entweder das {{HTMLElement("form")}}, das der im `form`-Attribut des Elements (falls vorhanden) angegebenen `id` entspricht, oder, häufiger, das `<form>`, in das das Element eingebettet ist.

> [!NOTE]
> Um die Autovervollständigung zu ermöglichen, könnten User-Agents verlangen, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Untergeordnete eines `<form>`-Elements sind
> 3. Zu einem Formular gehören, das einen {{HTMLElement("input/submit", "submit")}}-Button hat

Wenn dieselbe Liste von Token in mehr als einem Formularelement verwendet wird, wird der User-Agent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Dateneintrag vervollständigen.

Einige Token können mehrfach mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie das `zip-code`-Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Das Einschließen mehrerer unterschiedlicher Token in einer durch Leerzeichen getrennten Liste führt dazu, dass die zugehörigen Formularsteuerungen individuelle Autocomplete-Werte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autocomplete-Werte müssen möglicherweise mehrmals wiederverwendet werden. Beispielsweise kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, während dabei unterschiedliche Werte erwartet werden. Um den Autocomplete-Wert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste der Token ein `section-*`-Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenkette "section-" sind, gefolgt von einer alphanumerischen Zeichenkette. Alle Felder des Formulars, denen das `section-*`-Token mit derselben alphanumerischen Zeichenkette zugewiesen ist, gehören zu derselben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut bei {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) eingeschlossen wird, muss dessen Wert eine geordnete Liste von durch Leerzeichen getrennten Token sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte ist im Allgemeinen dem Browser überlassen; typischerweise stammen die Werte aus früheren Eingaben des Benutzers, sie können jedoch auch aus vorkonfigurierten Werten stammen. Beispielsweise kann ein Browser dem Benutzer ermöglichen, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen für Autocomplete-Zwecke zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen für die Autovervollständigung nach einem Authentifizierungsverfahren zu speichern.

> [!NOTE]
> Das Attribut `autocomplete` steuert auch, ob Firefox – im Gegensatz zu anderen Browsern – [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Check-Zuständigkeit](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder eines vollständigen `<form>` über Seitenladungen hinweg beibehält. Diese Persistenzfunktion ist standardmäßig aktiviert. Wenn der Wert des Attributs `autocomplete` auf `off` gesetzt wird, wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht angewendet wird. Siehe [Firefox-Fehler 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autocomplete-Wertes beschreibt.

- `off`
  - : Der Browser darf für dieses Feld keinen Wert automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autocomplete-Funktion bereitstellt, oder dass Sicherheitsbedenken es erfordern, dass der Feldwert nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern wird das Setzen von `autocomplete` auf `"off"` nicht verhindern, dass ein Passwort-Manager den Benutzer fragt, ob er Benutzername und Passwort speichern möchte, oder dass er diese Werte automatisch in das Login-Formular einer Website eingibt. Siehe [Verwaltung der Autovervollständigung für Login-Felder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es wird keine Orientierung über die erwartete Art der Daten im Feld gegeben, daher kann der Browser nach eigenem Ermessen handeln.

- `<token-list>`
  - : Eine geordnete Menge von [durch Leerzeichen getrennten Token](#token-liste-token), bestehend aus Autofill-Detail-Token, vorausgegangen von optionalen Abschnitts- und entweder Rechnungs- oder Versandgruppen-Token. Telefonnummern, E-Mail-Adressen und Messaging-Protokolltoken werden von einem Token identifiziert, das den Typ des Empfängers identifiziert.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Liste-Token

Die Optionen `<token-list>` umfassen, in der Reihenfolge:

1. [Benannte Gruppe von Token](#benannte_gruppen)
2. [Gruppenidentifikator](#gruppenidentifikator)
3. [Detail-Token](#detail-token)
4. [Webautorisierung](#webautorisierungstoken)

#### Benannte Gruppen

Um eine benannte Gruppe von Formfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Falls vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste der Token sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen die Zeichenkette "section-" sind, nicht empfindlich auf Groß- und Kleinschreibung, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppenidentifikator

Ein optionaler `shipping` oder `billing` Gruppenidentifikator

- `shipping`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, ist Teil der Versandadresse oder Kontaktinformationen.
- `billing`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, ist Teil der Rechnungsadresse oder Kontaktinformationen.

#### Detail-Token

Jede durch Leerzeichen getrennte Liste von Detail-Token enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen, in dieser Reihenfolge, oder eine durch Leerzeichen getrennte Liste anderer Tokens.

##### Empfängertyp

Die Token, die den Empfängertyp identifizieren, umfassen:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zum Kontaktieren des Empfängers an seinem Wohnsitz.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zum Kontaktieren des Empfängers an seinem Arbeitsplatz.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zum Kontaktieren des Empfängers unabhängig vom Standort.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist ein Faxgerät.
- `pager`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist ein Pager oder Piepser.

##### Digitale Kontakt-Token

Das Token oder die Gruppe von Token für Telefonnummern oder ihre Komponenten, Telefonerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich Ländercode. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Der Ländercode, wie "1" für die Vereinigten Staaten, Kanada und andere Regionen in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die vollständige Telefonnummer ohne den Ländercode, einschließlich eines landesinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre dieser Feldwert "855-555-6502".
    - `tel-area-code`
      - : Die Ortsvorwahl, mit einem landesinternen Präfix, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Land oder Ortsvorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, für Telefonnummern, die eine Vorwahl und dann eine Nummer innerhalb der Vorwahl haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonerweiterungscode innerhalb der Telefonnummer, wie eine Zimmer- oder Suitennummer in einem Hotel oder eine Büroerweiterung in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Endpunkt eines Instant-Messaging-Protokolls, wie `xmpp:username@example.net`.

##### Andere Token

Wenn das Formfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Liste von Token nicht von einem Kontakttyp vorangestellt:

- `name`
  - : In das Feld wird der vollständige Name einer Person erwartet. Die Verwendung von `name` anstelle der Aufteilung des Namens in seine Bestandteile wird generell bevorzugt, da dadurch die Vielzahl menschlicher Namen und deren Struktur umgangen wird. Sie können jedoch die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Bestandteile zerlegen müssen:
    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Mrs.", "Mr.", "Miss", "Ms.", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname (oder "erste" Name).
    - `additional-name`
      - : Der zusätzliche Name (oder zweite Name).
    - `family-name`
      - : Der Nachname (oder "letzter" Name).
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Benutzername.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Bei der Erstellung eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein Feld wie "Geben Sie Ihr neues Passwort ein" oder "Neues Passwort bestätigen" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das möglicherweise vorhanden ist. Dies kann vom Browser sowohl verwendet werden, um versehentliches Ausfüllen eines existierenden Passworts zu verhindern, als auch um Hilfe bei der Erstellung eines sicheren Passworts anzubieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein Einmal-Passwort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor in einem Loginprozess verwendet wird.
    Am häufigsten ist dies ein Code, der über einen anderen Kanal, wie SMS, E-Mail oder Authentifizierungsanwendung, empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Unternehmens- oder Organisationsname, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Diese kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb ihrer zweiten administrativen Ebene (typischerweise eine Stadt oder Gemeinde) vollständig identifizieren, aber nicht den Stadtnamen, die PLZ oder den Namen des Landes enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die am feinsten aufgelöste [Verwaltungsebene](#administrative_ebenen_in_adressen), in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#administrative_ebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#administrative_ebenen_in_adressen), in Adressen mit mindestens zwei von ihnen. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder eine andere Lokalität, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#administrative_ebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Bundesstaat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Ländercode oder ein Territorialcode.
- `country-name`
  - : Ein Ländername oder ein Name eines Territoriums.
- `postal-code`
  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies der ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf oder mit einem Zahlungsmittel wie einer Kreditkarte angegeben ist. Typischerweise wird das vollständige Namensfeld bevorzugt, anstatt den Namen in Einzelteile aufzuteilen.
    - `cc-given-name`
      - : Ein Vorname, wie er auf einem Zahlungsmittel wie einer Kreditkarte angegeben ist.
    - `cc-additional-name`
      - : Ein zweiter Name, wie er auf einem Zahlungsmittel oder Kreditkarte angegeben ist.
    - `cc-family-name`
      - : Ein Nachname, wie er auf einer Kreditkarte angegeben ist.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise in der Form "MM/JJ" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode des Zahlungsmittels; bei Kreditkarten ist dies die 3-stellige Verifizierungsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nichtbinär"), als Freitext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Homepage oder eine Unternehmenswebseite, die im Kontext der anderen Felder im Formular angemessen ist.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die in den anderen Feldern des Formulars angegebenen Kontaktinformationen darstellt.

#### Webautorisierungstoken

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token zuletzt hinzugefügt werden, um anzuzeigen, dass der User-Agent öffentliche Sicherheitsschlüssel-Anmeldeinformationen anzeigen soll, wenn der Benutzer mit der Steuerung interagiert.

- `webauthn`
  - : Passwörter, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, wie von einem bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf (d.h. einer, der `mediation: 'conditional'` enthält) angefordert wird. Wenn enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Liste von Token. Siehe [Anmelden mit einem Passkey über die Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Administrative Ebenen in Adressen

Die vier Verwaltungsfeldebenen (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungseinheit; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Landesnamen.

### Formflexibilität bei Layout

Da verschiedene Länder ihre Adressen unterschiedlich schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar unterschiedlichen Sets und Zahlen von Feldern, kann es hilfreich sein, wenn es möglich ist, dass Ihre Website in der Lage ist, auf das Layout zu wechseln, das von Ihren Benutzern erwartet wird, wenn sie ein Adresseneingabeformular präsentieren, das sich im Land befindet, in dem die Adresse liegt.

### Abweichungen

Die Anwendung jeder administrativen Ebene variiert von Land zu Land. Nachfolgend einige Beispiele; dies ist keine erschöpfende Liste.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung des US Postal Service für "Kalifornien"). Somit ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitwenig spezifische Teil der Adresse ist der Stadt- oder Ortsname, so dass `address-level2` "Exampleville" in diesem Beispiel ist.

Adressen in den Vereinigten Staaten verwenden die Ebenen 3 und höher nicht.

#### Vereinigtes Königreich

Adresseingabeformulare im Vereinigten Königreich sollten ein oder zwei Adressebenen und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse sieht so aus:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Lokalität — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßenangaben — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um Post erfolgreich im Vereinigten Königreich zuzustellen, so dass sie die einzigen Pflichtangaben sein sollten, aber für gewöhnlich neigen die Leute dazu, mehr Details bereitzustellen.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl ist nicht immer notwendig, aber wenn sie angegeben ist, wird sie zur Klarheit separat mit einem Label platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge vom am wenigsten spezifischen zu spezifischeren Teilen (im **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und darauf folgende sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole von Tokio verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Gemeinden und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Grundstücksnummer besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}}-Element
- Das {{htmlelement("select")}}-Element
- Das {{htmlelement("textarea")}}-Element
- Das {{htmlelement("form")}}-Element
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
