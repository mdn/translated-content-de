---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "User Agent")}} automatisierte Unterstützung beim Ausfüllen von Formularfeldwerten leisten darf und bietet dem Browser Hinweise darauf, welche Art von Informationen im Feld erwartet werden.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die einen Text- oder Zahlenwert als Eingabe akzeptieren, {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen sowie {{HTMLElement("form")}}-Elementen.

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

Das `autocomplete`-Attribut gibt dem User Agent einen Hinweis darauf, wie oder ob ein Formularsteuerungselement vorab ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von Leerzeichen-getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des zugehörigen Formulars](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das zugehörige Formular ist entweder das {{HTMLElement("form")}}, das mit der durch das [`form`](/de/docs/Web/HTML/Reference/Attributes/form) Attribut des Elements angegebenen `id` übereinstimmt (falls vorhanden) oder, häufiger, das `<form>`, in das das Element eingebettet ist.

> [!NOTE]
> Um Autovervollständigung zu ermöglichen, könnte von User Agents erwartet werden, dass `<input>`/`<select>`/`<textarea>` Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Nachkommen eines `<form>`-Elements sind
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}}-Button gesteuert werden

Wenn dieselbe Liste von Tokens in mehr als einem Formularelement verwendet wird, vervollständigt der User Agent alle Vorkommen desselben `autocomplete`-Werts mit demselben Datenwert.

Einige Tokens können mehr als einmal mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie z.B. das `zip-code`-Token in einem Formular, das sowohl Liefer- als auch Rechnungsadressen enthält. Das Einfügen mehrerer verschiedener Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass die zugeordneten Formularfelder eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrfach verwendet werden. Zum Beispiel kann ein Formular mehrere Lieferadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, während dennoch verschiedene Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste der Tokens ein `section-*`-Token sein, wobei die acht ersten Zeichen des Tokens immer der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, die das `section-*`-Token mit demselben alphanumerischen String enthalten, gehören zu derselben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut bei {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von Leerzeichen-getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte wird im Allgemeinen vom Browser bestimmt; typischerweise stammen die Werte von in der Vergangenheit vom Benutzer eingegebenen Werten, aber sie können auch von vorab konfigurierten Werten stammen. Zum Beispiel könnte ein Browser dem Benutzer erlauben, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen zum Zwecke der Autovervollständigung zu speichern. Der Browser könnte auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um diese nach einer Authentifizierungsprozedur automatisch auszufüllen.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox - im Gegensatz zu anderen Browsern - [den dynamischen deaktivierten Zustand und gegebenenfalls dynamische Markierung] (https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladevorgänge hinweg beibehält. Die Persistenzfunktion ist standardmäßig aktiviert. Durch Setzen des Werts des `autocomplete`-Attributs auf `off` wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut aufgrund seines `type` normalerweise nicht anwendbar wäre. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`
  - : Der Browser darf nicht automatisch einen Wert für dieses Feld eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bietet oder Sicherheitsbedenken erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwortmanager den Benutzer fragt, ob er Benutzername und Passwortinformationen speichern möchte, oder diese Werte in einem Anmeldeformular einer Website automatisch ausfüllt. Siehe [Verwalten der automatischen Ausfüllung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es werden keine Hinweise auf den erwarteten Datentyp im Feld gegeben, sodass der Browser sein eigenes Ermessen nutzen kann.

- `<token-list>`
  - : Eine geordnete Menge von [Leerzeichen-getrennten Tokens](#tokenliste:_tokens), die aus Tokens für Detailinformationen zur Autovervollständigung besteht, eingeleitet von optionalen Segmentierungs- und entweder Rechnungs- oder Versandgruppierungs-Tokens. Telefonnummern, E-Mail-Adressen und Tokens für Nachrichtenprotokolle werden von einem Token vorangestellt, das den Typ des Empfängers identifiziert.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Tokenliste: Tokens

Die `<token-list>`-Optionen umfassen in dieser Reihenfolge:

1. [Gruppenbenennungstoken](#benannte_gruppen)
2. [Gruppenidentifikator](#gruppenidentifikator)
3. [Detail-Tokens](#detail-tokens)
4. [Webautorisation](#webauthentifizierungstoken)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Wenn vorhanden, muss dieses Token das erste in der durch Leerzeichen getrennten Tokenliste sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen, case-insensitive, die Zeichenkette "section-" sind, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppenidentifikator

Ein optionaler `shipping`- oder `billing`-Gruppenidentifikator

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Lieferadresse oder Kontaktinformationen
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformationen

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detail-Tokenliste enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Tokenliste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Typ des Empfängers identifizieren, umfassen:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient dazu, den Empfänger an seinem Wohnsitz zu kontaktieren.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient dazu, den Empfänger an seinem Arbeitsplatz zu kontaktieren.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient dazu, den Empfänger unabhängig von seinem Standort zu kontaktieren.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für ein Faxgerät.
- `page`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für einen Pager oder Piepser.

##### Digitale Kontakt-Tokens

Das Token oder eine Gruppe von Tokens für Telefonnummern oder die Komponenten einer Nummer, Telefonnebenstellen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Landesvorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Landesvorwahl, einschließlich eines länderinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit einem länderinternen Präfix, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne die Landes- oder Vorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, für Telefonnummern, die eine Zentrumsnummer und dann eine Nummer innerhalb des Zentrums haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonnebenstellencode innerhalb der Telefonnummer, wie eine Zimmernummer in einem Hotel oder eine Bürotelefonnummer in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für ein Instant-Messaging-Protokoll-Endpunkt, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Liste der Tokens nicht durch einen Kontakttyp eingeleitet:

- `name`
  - : Das Feld erwartet den Wert als vollständigen Namen einer Person. Die Verwendung von `name` anstatt den Namen in seine Komponenten aufzuteilen, wird im Allgemeinen bevorzugt, da es vermeidet, sich mit der vielfältigen Struktur menschlicher Namen und ihrer Struktur zu beschäftigen; jedoch können Sie die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Komponenten aufteilen müssen:
    - `honorific-prefix`
      - : Das Präfix oder der Titel, wie "Frau", "Herr", "Fräulein", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der Mittelname.
    - `family-name`
      - : Der Nachname.
    - `honorific-suffix`
      - : Der Suffix wie "Jr.", "B.Sc.", "PhD." oder "IV".
    - `nickname`
      - : Ein Spitzname oder Pseudonym.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Anlegen eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie das neue Passwort" Feld verwendet werden, im Gegensatz zu einem allgemeinen "Geben Sie Ihr aktuelles Passwort ein" Feld, das vorhanden sein könnte. Dies kann vom Browser sowohl verwendet werden, um das versehentliche Ausfüllen eines vorhandenen Passworts zu vermeiden als auch um bei der Erstellung eines sicheren Passworts zu assistieren.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein Einmalpasswort (OTP) zur Verifizierung der Benutzeridentität als zusätzlicher Faktor in einem Anmeldevorgang.
    In der Regel ist dies ein Code, der über einen außer Kanal Mechanismus wie SMS, E-Mail oder Authentifizierungsanwendung empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "Präsident" oder "Stellvertretender Gruppenleiter".
- `organization`
  - : Ein Firmen- oder Organisationsname, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb ihrer zweiten Verwaltungseinheit (normalerweise einer Stadt oder eines Dorfes) vollständig identifizieren, jedoch nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), für Adressen mit vier Ebenen.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), für Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei Ebenen. In Ländern mit zwei Verwaltungsebenen wäre dies in der Regel die Stadt, das Dorf oder die Ortschaft, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist in der Regel die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Bundesstaat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`
  - : Ein Postleitzahl (in den Vereinigten Staaten ist dies die ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf einem Zahlungsmittel wie einer Kreditkarte gedruckt oder zugeordnet ist. Die Verwendung eines vollständigen Namensfeldes wird in der Regel dem Aufteilen des Namens in Teile vorgezogen.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel oder einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein Mittelname, wie auf einem Zahlungsmittel oder einer Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die eine Zahlungsmethode identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum der Zahlungsmethode, in der Regel in der Form "MM/YY" oder "MM/YYYY".
    - `cc-exp-month`
      - : Der Monat, in dem die Zahlungsmethode abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem die Zahlungsmethode abläuft.
- `cc-csc`
  - : Der Sicherheitscode des Zahlungsmittels; bei Kreditkarten ist dies die 3-stellige Prüfnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (zum Beispiel "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` angegebenen Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprachtag")}}.
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Geburtsdatums.
    - `bday-month`
      - : Der Monat des Geburtsdatums.
    - `bday-year`
      - : Das Jahr des Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als freiformatierter Text ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Homepage oder eine Firmenwebadresse, je nach Kontext der anderen Felder im Formular.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktinformationen darstellt, die in den anderen Feldern im Formular angegeben sind.

#### Webauthentifizierungstoken

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token zuletzt eingefügt werden, um anzugeben, dass der User Agent öffentliche Schlüsselanmeldeinformationen anzeigen soll, wenn der Benutzer mit dem Steuerungselement interagiert.

- `webauthn`
  - : Zugangsschlüssel, die durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, angefordert durch einen konditionalen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf (d.h. einer, der `mediation: 'conditional'` enthält). Falls enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmeldung mit einem Zugangsschlüssel über die Formular-Autovervollständigung](https://web.dev/articles/passkey-form-autofill) für mehr Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsfeld-Level (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Detailgenauigkeit innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die umfassendste Verwaltungsebene; es ist der allgemeinste Teil der Adresse abgesehen vom Ländernamen.

### Flexibilität im Formularlayout

Da verschiedene Länder ihre Adressen auf unterschiedliche Art und Weise schreiben, jedes Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar unterschiedliche Sätze und Anzahlen von Feldern vollständig verwenden, kann es hilfreich sein, wenn Ihre Seite in der Lage ist, das für Ihre Benutzer erwartete Layout beim Präsentieren eines Adresseingabeformulars entsprechend dem Land, in dem sich die Adresse befindet, zu wechseln.

### Abweichungen

Die Art und Weise, wie jede Verwaltungsebene verwendet wird, variiert von Land zu Land. Hier sind einige Beispiele; dies ist nicht als vollständige Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Irgendwo Straße
Beispielstadt CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Bundesstaat, in diesem Fall "CA" (die offizielle Abkürzung des US Postal Service für "Kalifornien"). Somit ist `address-level1` der Bundesstaat, oder "CA" in diesem Fall.

Der zweitunpräziseste Teil der Adresse ist der Stadt- oder Ortsname, also `address-level2` ist "Beispielstadt" in dieser Beispieladresse.

Vereinigte Staaten Adressen verwenden keine Level 3 und höher.

#### Vereinigtes Königreich

Adresseingabeformulare im Vereinigten Königreich sollten ein oder zwei Adress-Level und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse könnte so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adresslevel sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Lokalität — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßenangaben — "103 Frogmarch Street".

Der Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur den Postleitzahl und `address-line1` verwenden können, um die Zustellung in Großbritannien erfolgreich durchzuführen, daher sollten sie die einzigen Pflichtangaben sein, aber in der Regel neigen Menschen dazu, mehr Details anzugeben.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl wird nicht immer benötigt, aber wenn sie angegeben wird, wird sie separat mit einer Beschriftung zur Klarheit platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile** geschrieben, in einer Reihenfolge von der wenig spezifischen zu den spezifischeren Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Präfektur Nagano) in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Gemeinden und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Losnummer besteht.

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
