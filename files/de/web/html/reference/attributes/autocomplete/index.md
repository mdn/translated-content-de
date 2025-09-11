---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 1ff044ac87e406eb23ae7181dd171bad87421b79
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "User-Agent")}} eine automatische Unterstützung beim Ausfüllen von Formularfeldwerten bereitstellen darf, sowie eine Anleitung für den Browser zu geben, welche Art von Informationen im Feld erwartet werden.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die einen Text- oder numerischen Wert als Eingabe akzeptieren, {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

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

Das Attribut `autocomplete` gibt dem User-Agent einen Hinweis, wie oder ob ein Steuerelement im Formular ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **zugehörigen Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das zugehörige Formular ist entweder das {{HTMLElement("form")}}, das dem durch das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut des Elements (falls vorhanden) angegebenen `id` entspricht, oder meist das `<form>`, in dem das Element verschachtelt ist.

> [!NOTE]
> Um die Autovervollständigung bereitzustellen, könnten User-Agents erfordern, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Nachfahren eines `<form>`-Elements sind
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}}-Button verwendet werden

Wenn dieselbe Liste von Tokens in mehr als einem Formularsteuerelement verwendet wird, wird der User-Agent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert autovervollständigen.

Einige Tokens können mehr als einmal mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie beispielsweise das Token `zip-code` in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Die Aufnahme mehrerer verschiedener Tokens in einer durch Leerzeichen getrennten Liste führt dazu, dass die zugehörigen Formularsteuerelemente eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrfach wiederverwendet werden. Beispielsweise kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, während dennoch unterschiedliche Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*`-Token sein, wobei die ersten acht Zeichen des Tokens stets der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, denen das `section-*`-Token mit demselben alphanumerischen String zugewiesen ist, gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut bei {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) enthalten ist, muss dessen Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht zulässig.

Die Quelle der vorgeschlagenen Werte liegt im Allgemeinen im Ermessen des Browsers; typischerweise stammen die Werte aus vergangenen Eingaben des Benutzers, aber sie können auch aus vorkonfigurierten Werten stammen. Zum Beispiel könnte ein Browser dem Benutzer erlauben, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen für Autovervollständigungszwecke zu speichern. Der Browser könnte auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um sie nach einem Authentifizierungsverfahren zur Autovervollständigung bereitzustellen.

> [!NOTE]
> Das Attribut `autocomplete` steuert auch, ob Firefox – im Gegensatz zu anderen Browsern – [den dynamischen deaktivierten Zustand und (falls zutreffend) den dynamischen "checked"-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>`-Elements über Seitenladevorgänge hinweg speichert. Die Persistenzfunktion ist standardmäßig aktiviert. Durch Festlegen des Wertes des `autocomplete`-Attributs auf `off` wird diese Funktion deaktiviert. Dies funktioniert sogar dann, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht angewendet wird. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`
  - : Der Browser ist nicht berechtigt, automatisch einen Wert für dieses Feld einzugeben oder auszuwählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bietet oder dass Sicherheitsbedenken erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern wird das Setzen von `autocomplete` auf `"off"` einen Passwortmanager nicht davon abhalten, den Benutzer zu fragen, ob er Benutzername und Passwort speichern möchte, oder diese Werte automatisch in einem Anmeldeformular auf der Website auszufüllen. Siehe [Verwaltung von Autofill für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Dem Browser ist es erlaubt, die Eingabe automatisch zu vervollständigen. Es gibt keine Anleitung zur Art der erwarteten Daten im Feld, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`
  - : Eine geordnete Reihe von [durch Leerzeichen getrennten Tokens](#token-listen-tokens), die aus Autofill-Detailtokens besteht, die von optionalen Sektions- und entweder Abrechnungs- oder Versandgruppentokens vorangestellt werden. Telefonnummern, E-Mail-Adressen und Messaging-Protokoll-Tokens sind von einem Token vorangestellt, das den Typ des Empfängers identifiziert.

Siehe den [WHATWG Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Listen-Tokens

Die `<token-list>` Optionen umfassen, in der Reihenfolge:

1. [Gruppen-Benennungstoken](#benannte_gruppen)
2. [Gruppierungskennzeichen](#gruppierungskennzeichen)
3. [Detail-Tokens](#detail-tokens)
4. [Webautorisierung](#webautorisierungstoken)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Falls vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Tokenliste sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen die ersten acht Zeichen der String "section-", nicht unterscheidend zwischen Groß- und Kleinschreibung, gefolgt von zusätzlichen Zeichen ist. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungskennzeichen

Ein optionales `shipping` oder `billing` Gruppierungskennzeichen

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Versandadresse oder Kontaktinformation
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Abrechnungsadresse oder Kontaktinformation

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detailliste von Tokens umfasst entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Tokenliste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Typ des Empfängers identifizieren, umfassen:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontaktart ist für die Kontaktaufnahme mit dem Empfänger an seinem Wohnsitz.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontaktart ist für die Kontaktaufnahme mit dem Empfänger an seinem Arbeitsplatz.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontaktart ist für die Kontaktaufnahme mit dem Empfänger unabhängig von dessen Standort.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für ein Faxgerät.
- `page`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für einen Pager oder Piepser.

##### Digitale Kontakt-Tokens

Das Token oder die Token-Gruppe für Telefonnummern oder deren Komponenten, Durchwahlnummern, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Ländervorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Ländervorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Ländervorwahl-Komponente, einschließlich eines landesinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Ortsvorwahl, mit jedem landesinternen Präfix, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Ortsvorwahl. Diese kann weiter in zwei Teile unterteilt werden, für Telefonnummern, die eine Vermittlungsnummer und dann eine Telefonnummer innerhalb der Vermittlung haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Eine Durchwahlnummer innerhalb der Telefonnummer, wie eine Zimmernummer in einem Hotel oder eine Bürodurchwahl in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für ein Instant-Messaging-Protokoll-Endpunkt, wie `xmpp:username@example.net`.

##### Weitere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Tokenliste nicht von einem Kontaktart vorangestellt:

- `name`
  - : Das Feld erwartet einen vollständigen Namen einer Person als Wert. Die Verwendung von `name` anstelle des Aufteilens des Namens in seine Komponenten wird im Allgemeinen bevorzugt, da so die große Vielfalt an menschlichen Namen und deren Strukturierung vermieden wird; Sie können jedoch die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Komponenten aufteilen müssen:
    - `honorific-prefix`
      - : Das Präfix oder der Titel, wie "Frau.", "Herr.", "Fräulein", "Fr.", "Dr." oder "Hon.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Familienname (oder Nachname).
    - `honorific-suffix`
      - : Das Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Kürzel.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein Feld "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie das neue Passwort" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das möglicherweise vorhanden ist. Dies könnte vom Browser sowohl verwendet werden, um versehentliches Ausfüllen eines bestehenden Passworts zu vermeiden, als auch um Hilfe bei der Erstellung eines sicheren Passworts anzubieten.
- `current-password`
  - : Das aktuelle Benutzerpasswort.
- `one-time-code`
  - : Ein Einmalpasswort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor im Anmeldevorgang verwendet wird.
    Meistens ist dies ein Code, der über einen externen Mechanismus wie SMS, E-Mail oder Authenticator-Anwendung empfangen wird.
- `organization-title`
  - : Eine Berufsbezeichnung oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Leitender Technischer Redakteur", "Präsident" oder "Stellvertretender Gruppenführer".
- `organization`
  - : Der Name eines Unternehmens oder einer Organisation, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Diese kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb der zweiten Verwaltungsebene (typischerweise eine Stadt oder Gemeinde) voll identifizieren, sollte jedoch nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens zwei von ihnen. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder eine andere Ortschaft, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`
  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies die ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf oder in Verbindung mit einem Zahlungsmittel wie einer Kreditkarte gedruckt ist. Typischerweise ist die Verwendung eines vollständigen Namensfeldes vorzuziehen, anstatt den Namen in Teile aufzuteilen.
    - `cc-given-name`
      - : Ein Vorname, wie er auf einem Zahlungsmittel wie einer Kreditkarte angegeben ist.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie er auf einem Zahlungsmittel oder einer Kreditkarte angegeben ist.
    - `cc-family-name`
      - : Ein Familienname, wie er auf einer Kreditkarte angegeben ist.
- `cc-number`
  - : Eine Kreditkartennummer oder eine Nummer, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum eines Zahlungsmittels, typischerweise in der Form "MM/JJ" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsmittel; bei Kreditkarten ist dies die 3-stellige Prüfnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag).
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als Freitext ohne neue Zeilen.
- `url`
  - : Eine URL, wie eine Homepage- oder Firmenwebseiten-Adresse, die im Kontext der anderen Felder im Formular angemessen ist.
- `photo`
  - : Die URL eines Bildes, das die in den anderen Feldern im Formular angegebenen Person, das Unternehmen oder die Kontaktinformationen darstellt.

#### Webautorisierungstoken

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token zuletzt eingefügt werden, um anzuzeigen, dass der User-Agent öffentliche Schlüsselanmeldeinformationen anzeigen sollte, wenn der Benutzer mit der Steuerung interagiert.

- `webauthn`
  - : Passwörter, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert wurden, wie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf angefordert (d.h. einen, der `mediation: 'conditional'` enthält). Wenn vorhanden, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Mit einem Passkey über die Formular-Autovervollständigung anmelden](https://web.dev/articles/passkey-form-autofill) für mehr Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebenen-Felder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Genauigkeit innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlichen Ordnungen anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert stets die breiteste Verwaltungsebene; es ist der am wenigsten spezifische Teil der Adresse mit Ausnahme des Ländernamens.

### Flexibilität des Formularlayouts

Da verschiedene Länder ihre Adressen unterschiedlich bilden, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse, und sogar unterschiedliche Sets und Anzahlen von Feldern, kann es hilfreich sein, wenn Ihre Seite in der Lage ist, das Layout anzupassen, das von Ihren Benutzern erwartet wird, wenn sie ein Adresseneingabeformular anzeigen, basierend auf dem Land, in dem sich die Adresse befindet.

### Variationen

Die Nutzung jeder Verwaltungsebene variiert von Land zu Land. Unten sind einige Beispiele; dies ist nicht als erschöpfende Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Bundesstaat, in diesem Fall "CA" (die offizielle US-Post-Schreibweise für "California"). Somit ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitwenigste spezifische Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` "Exampleville" in diesem Beispiel.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare im Vereinigten Königreich sollten ein oder zwei Adresseneinstellungen und ein, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse würde so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adresseneinstellungen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Lokalität — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßeneinzelheiten — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um Post erfolgreich im Vereinigten Königreich zu liefern, daher sollten sie die einzigen Pflichtangaben sein, aber üblicherweise neigen Menschen dazu, mehr Angaben zu machen.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl ist nicht immer erforderlich, aber wenn sie angegeben wird, wird sie zur Klarheit separat mit einem Label platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile** geschrieben, in einer Reihenfolge von der am wenigsten spezifischen zu den spezifischeren Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Eine zusätzliche Linie kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die darauffolgenden sieben Ziffern zeigen die Postleitzahl.

`address-level1` wird für Präfekturen oder die Tokyo Metropole verwendet; "長野県" (Nagano Präfektur) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Städte und Dörfer verwendet; "長野市" (Nagano Stadt) in diesem Fall. "某町 123" ist `address-line1` welches einen Gebietsname und eine Losnummer umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}} Element
- Das {{htmlelement("select")}} Element
- Das {{htmlelement("textarea")}} Element
- Das {{htmlelement("form")}} Element
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
