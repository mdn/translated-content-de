---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und welche Berechtigung der {{Glossary("user_agent", "Nutzeragent")}} hat, bei der automatischen Assistenz beim Ausfüllen von Formularfeldern zu helfen, sowie dem Browser Hinweise zu geben, welche Art von Informationen im Feld erwartet werden.

Es ist auf {{HTMLElement("input")}}-Elementen verfügbar, die Text- oder Zahlenwerte als Eingabe annehmen, sowie auf {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

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

Das `autocomplete`-Attribut bietet dem Nutzeragenten einen Hinweis darauf, wie oder ob ein Formularsteuerfeld vorausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des Formulars, dem das Element zugehört](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das zugehörige Formular ist entweder das {{HTMLElement("form")}}, das mit der `id` übereinstimmt, die durch das [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) Attribut des Elements angegeben ist (falls vorhanden), oder, häufiger, das `<form>`, in dem das Element eingebettet ist.

> [!NOTE]
> Um eine Autovervollständigung bereitzustellen, könnten Nutzeragenten erfordern, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Nachkommen eines `<form>`-Elements sind
> 3. Zu einem Formular gehören, das einen {{HTMLElement("input/submit", "submit")}}-Button hat

Wenn dieselbe Liste von Tokens in mehr als einem Formularsteuerfeld verwendet wird, wird der Nutzeragent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert automatisch ausfüllen.

Einige Tokens können mehr als einmal verwendet werden, möglicherweise mit unterschiedlichen erwarteten Werten, wie das `zip-code`-Token in einem Formular, das sowohl Liefer- als auch Rechnungsadressen enthält. Das Einfügen mehrerer verschiedener Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass die zugehörigen Formularsteuerfelder eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrmals wiederverwendet werden. Beispielsweise kann ein Formular mehrere Lieferadressen enthalten und daher mehrfach `"shipping zip-code"` erwarten, während immer noch unterschiedliche Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*`-Token sein, wo die ersten acht Zeichen des Tokens immer die Zeichenfolge "section-" sind, gefolgt von einer alphanumerischen Zeichenfolge. Alle Formularfelder, die das `section-*`-Token mit derselben alphanumerischen Zeichenfolge haben, gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut auf {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte hängt im Allgemeinen vom Browser ab; typischerweise stammen Werte aus früheren Eingaben des Nutzers, sie können jedoch auch aus vorkonfigurierten Werten stammen. Beispielsweise könnte ein Browser dem Nutzer erlauben, seinen Namen, Adresse, Telefonnummer und E-Mail-Adressen für Autovervollständigungszwecke zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, zur Autovervollständigung nach einem Authentifizierungsverfahren.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox — im Gegensatz zu anderen Browsern — [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Markierung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladungen hinweg speichert. Die Persistenzfunktion ist standardmäßig aktiviert. Die Einstellung des Attributwerts von `autocomplete` auf `off` deaktiviert diese Funktion. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise nicht anwendbar wäre, aufgrund seines `type`. Siehe [Firefox bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswerts beschreibt.

- `off`
  - : Der Browser darf keinen Wert für dieses Feld automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bereitstellt oder dass Sicherheitsbedenken erfordern, dass der Wert des Feldes nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwort-Manager den Nutzer fragt, ob er Benutzername und Passwort speichern möchte, oder diese Werte in einem Anmeldeformular der Website automatisch ausfüllt. Siehe [Verwalten der Autovervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es wird keine Anleitung zum erwarteten Datentyp im Feld gegeben, sodass der Browser sein eigenes Urteil fällen kann.

- `<token-list>`
  - : Eine geordnete Menge von [Leerzeichen-getrennten Tokens](#token_list_tokens), bestehend aus Autovervollständigungsdetail-Tokens, die optional von einer Sektionierung sowie entweder von einem Rechnungs- oder Liefergruppierungs-Token eingerahmt werden. Telefonnummern, E-Mail-Adressen und Nachrichtenprotokoll-Tokens sind durch ein Token gekennzeichnet, das den Empfängertyp identifiziert.

Siehe die [WHATWG Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token List Tokens

Die `<token-list>`-Optionen umfassen, in Reihenfolge:

1. [Gruppennamen-Token](#benannte_gruppen)
2. [Gruppierungsbezeichner](#gruppierungsbezeichner)
3. [Detail-Tokens](#detail-tokens)
4. [Web-Authentifizierung](#web-authentifizierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Wenn vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste von Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen die Zeichenfolge "section-" sind, ohne Berücksichtigung der Groß-/Kleinschreibung, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungsbezeichner

Ein optionaler `shipping` (Versand) oder `billing` (Rechnung) Gruppierungsbezeichner

- `shipping`
  - : Das durch die folgenden Tokens identifizierte Feld ist Teil der Lieferadresse oder Kontaktinformationen
- `billing`
  - : Das durch die folgenden Tokens identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformationen

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detail-Tokenliste umfasst entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Liste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Empfängertyp identifizieren, umfassen:

- `home`
  - : Der durch die folgenden Tokens identifizierte Kontakttyp dient dazu, den Empfänger an seinem Wohnsitz zu kontaktieren.
- `work`
  - : Der durch die folgenden Tokens identifizierte Kontakttyp dient dazu, den Empfänger an seinem Arbeitsplatz zu kontaktieren.
- `mobile`
  - : Der durch die folgenden Tokens identifizierte Kontakttyp dient dazu, den Empfänger unabhängig von seinem Standort zu kontaktieren.
- `fax`
  - : Der durch die folgenden Tokens identifizierte Empfänger ist ein Faxgerät.
- `page`
  - : Der durch die folgenden Tokens identifizierte Empfänger ist ein Pager oder Beeper.

##### Digitale Kontakt-Tokens

Das Token oder die Token-Gruppe für Telefonnummern oder die Komponenten einer Telefonnummer, Telefonnummern-Erweiterungen, E-Mail-Adressen oder Protokolle für Sofortnachrichten.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Landesvorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika sowie Teile der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Landesvorwahlkomponente, einschließlich einer landesinternen Vorwahl. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit einer landesinternen Vorwahl, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Vorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, bei Telefonnummern, die eine Vermittlungsnummer und dann eine Nummer innerhalb der Vermittlung haben. Bei der Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Eine Telefonerweiterung innerhalb der Telefonnummer, wie ein Zimmer- oder Suite-Nummer in einem Hotel oder eine Büroerweiterung in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Endpunkt eines Sofortnachrichtenprotokolls, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Sofortnachrichtenprotokoll ist, wird die durch Leerzeichen getrennte Liste von Tokens nicht durch einen Kontakttyp eingeleitet:

- `name`
  - : Das Feld erwartet, dass der Wert der vollständige Name einer Person ist. Die Verwendung von `name` anstatt den Namen in seine Bestandteile zu unterteilen, wird im Allgemeinen bevorzugt, da so die große Vielfalt menschlicher Namen und ihre Strukturierung vermieden wird. Sie können jedoch die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Bestandteile zerlegen müssen:
    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Frau", "Herr", "Fräulein", "Ms.", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der mittlere Name.
    - `family-name`
      - : Der Nachname.
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitziname oder Benutzername.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein "Neues Passwort eingeben" oder "Neues Passwort bestätigen" Feld verwendet werden, im Gegensatz zu einem allgemeinen "Aktuelles Passwort eingeben" Feld, das eventuell vorhanden sein könnte. Dies kann vom Browser sowohl verwendet werden, um das versehentliche Ausfüllen eines bestehenden Passworts zu vermeiden, als auch Unterstützung bei der Erstellung eines sicheren Passworts anzubieten.
- `current-password`
  - : Das aktuelle Passwort des Nutzers.
- `one-time-code`
  - : Ein Einmal-Passwort (OTP) zur Verifizierung der Nutzeridentität, das als zusätzlicher Faktor in einem Anmeldeprozess verwendet wird.
    Am häufigsten ist dies ein Code, der über einen Kanal außerhalb des regulären Kommunikationswegs empfangen wird, wie SMS, E-Mail oder Authentifizierungsanwendung.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Unternehmens- oder Organisationsname, wie "Acme Widget Company" oder "Girl Scouts of America".
- `street-address`
  - : Eine Straßenadresse. Diese kann aus mehreren Textzeilen bestehen und sollte den Standort der Adresse innerhalb seiner zweiten Verwaltungsebene (typischerweise eine Stadt oder ein Ort) vollständig identifizieren, sollte jedoch nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), bei Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), bei Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), bei Adressen mit mindestens zwei davon. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, der Ort oder das Dorf, in dem sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat, in der Schweiz der Kanton, im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Territoriumscode.
- `country-name`
  - : Ein Länder- oder Territoriumsname.
- `postal-code`
  - : Ein Postleitzahl (in den Vereinigten Staaten ist dies die ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie auf oder mit einem Zahlungsmittel, wie einer Kreditkarte, gedruckt. Die Verwendung eines vollständigen Namensfeldes wird in der Regel bevorzugt, anstatt den Namen in Stücke zu unterteilen.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie auf einem Zahlungsmittel oder Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder andere Nummer, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise in der Form "MM/YY" oder "MM/YYYY".
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
  - : Der Betrag, angegeben in der durch `transaction-currency` festgelegten Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als ein gültiger [BCP 47-Language-Tag](https://en.wikipedia.org/wiki/IETF_language_tag).
- `bday`
  - : Ein Geburtsdatum, als komplettes Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als freier Text ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Startseite oder Unternehmenswebsite, die im Kontext der anderen Felder im Formular angemessen ist.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktdaten repräsentiert, die in den anderen Feldern im Formular angegeben sind.

#### Web-Authentifizierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token am Ende eingeschlossen werden, um anzuzeigen, dass der Nutzeragent beim Interagieren mit dem Steuerelement öffentliche Schlüssel-Anmeldedaten anzeigen soll.

- `webauthn`
  - : Passkeys, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert wurden, wie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf angefordert (d.h. einen Aufruf, der `mediation: 'conditional'` enthält). Wenn eingeschlossen, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmelden mit einem Passkey durch Formular-Autofill](https://web.dev/articles/passkey-form-autofill) für mehr Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebene-Felder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungseinheit; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Ländernamen.

### Flexibilität des Formulardesigns

Da verschiedene Länder ihre Adresse auf unterschiedliche Weise schreiben, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar mit unterschiedlichen Sets und Anzahlen von Feldern, kann es hilfreich sein, wenn Ihre Website in der Lage ist, das Layout an die Erwartungen Ihrer Nutzer anzupassen, wenn ein Adresseneingabeformular präsentiert wird, basierend auf dem Land, in dem sich die Adresse befindet.

### Variationen

Die Art und Weise, wie jede Verwaltungsebene verwendet wird, variiert von Land zu Land. Hier sind einige Beispiele; dies soll keine vollständige Liste sein.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung des US-Postdienstes für "California"). Somit ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitwenigste spezifische Teil der Adresse ist der Stadt- oder Ortnamen, so dass `address-level2` "Exampleville" in diesem Beispielsadresse ist.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare im Vereinigten Königreich sollten eine oder zwei Adressebenen und eine, zwei oder drei Adresszeilen basierend auf der Adresse enthalten. Eine vollständige Adresse würde etwa so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Der Bezirk — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus- und Straßenangaben — "103 Frogmarch Street".

Der Postcode ist separat. Beachten Sie, dass Sie tatsächlich nur den Postcode und `address-line1` benötigen, um Post im Vereinigten Königreich erfolgreich zuzustellen. Sie sollten die einzigen obligatorischen Angaben sein, aber normalerweise geben die Leute tendenziell mehr Details an.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl wird nicht immer benötigt, aber wenn sie angegeben wird, befindet sie sich gesondert und mit einem Label für Klarheit. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge vom wenigsten spezifischen zu mehr spezifischen Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokyo verwendet; "長野県" (Präfektur Nagano) in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Bezirke und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Lot-Nummer besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{htmlelement("input")}}-Element
- Das {{htmlelement("select")}}-Element
- Das {{htmlelement("textarea")}}-Element
- Das {{htmlelement("form")}}-Element
- [HTML-Formulare](/de/docs/Learn/web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
