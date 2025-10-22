---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 5e27e809ac86d65e7cf318193e3bff9f028d7044
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "User-Agent")}} die Erlaubnis hat, automatisierte Unterstützung beim Ausfüllen von Formularfeldwerten zu bieten, sowie dem Browser eine Orientierungshilfe darüber zu geben, welche Art von Informationen im Feld erwartet werden.

Es ist verfügbar für {{HTMLElement("input")}}-Elemente, die Text- oder Zahlenwerte als Eingabe annehmen, {{HTMLElement("textarea")}}-Elemente, {{HTMLElement("select")}}-Elemente und {{HTMLElement("form")}}-Elemente.

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

Das Attribut `autocomplete` gibt dem User-Agent einen Hinweis darauf, wie oder ob ein Formularfeld automatisch ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das mit der im [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut des Elements (falls vorhanden) angegebenen `id` übereinstimmt oder, häufiger, das `<form>`, in dem das Element verschachtelt ist.

> [!NOTE]
> Um Autovervollständigung anzubieten, könnten User-Agents verlangen, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut haben
> 2. Nachfahren eines `<form>`-Elements sind
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "Absendebutton")}} besessen werden

Wird dieselbe Tokenliste in mehr als einem Formularsteuerelement verwendet, wird der User-Agent alle Vorkommen des gleichen `autocomplete`-Werts mit demselben Datenwert vervollständigen.

Einige Tokens können mehr als einmal mit möglicherweise verschiedenen erwarteten Werten verwendet werden, wie das Token `zip-code` in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Das Einfügen mehrerer verschiedener Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass die zugehörigen Formularsteuerelemente eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrfach wiederverwendet werden. Beispielsweise kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, während dennoch verschiedene Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Tokenliste ein `section-*` Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenkette "section-" sind, gefolgt von einer alphanumerischen Zeichenkette. Alle Formularfelder, denen das `section-*` Token mit derselben alphanumerischen Zeichenkette zugewiesen wird, gehören zu derselben **benannten Gruppe**.

Wird das `autocomplete`-Attribut auf {{HTMLElement("input/hidden", "hidden")}} Eingabeelementen (`<input type="hidden">`) eingefügt, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt in der Regel beim Browser; typischerweise stammen Werte aus vergangenen vom Benutzer eingegebenen Werten, sie können jedoch auch aus vorkonfigurierten Werten stammen. Ein Browser könnte beispielsweise dem Benutzer ermöglichen, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen für Autovervollständigungszwecke zu speichern. Der Browser kann dem Benutzer auch die Möglichkeit bieten, verschlüsselte Kreditkartendaten zu speichern, die nach einem Authentifizierungsverfahren automatisch vervollständigt werden.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox im Gegensatz zu anderen Browsern den [dynamischen deaktivierten Zustand und (falls zutreffend) den dynamischen Checked-Zustand](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, eines `<textarea>`-Elements oder eines gesamten `<form>` über Seitenladungen hinweg beibehält. Die Persistenzfunktion ist standardmäßig aktiviert. Wenn der Wert des `autocomplete`-Attributs auf `off` gesetzt wird, wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut aufgrund seines `type`-Werts normalerweise nicht anwendbar wäre. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswerts beschreibt.

- `off`
  - : Der Browser darf automatisch keinen Wert für dieses Feld eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung seine eigene Autovervollständigungsfunktion bereitstellt oder dass Sicherheitsaspekte erfordern, dass der Feldwert nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwort-Manager den Benutzer fragt, ob er die Benutzername- und Passwortinformationen speichern möchte, oder diese Werte in den Anmeldeformular einer Website automatisch ausfüllt. Siehe [Verwaltung der Autovervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf das Eingabefeld automatisch vervollständigen. Es wird keine Anleitung zur erwarteten Art der Daten im Feld gegeben, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`
  - : Eine geordnete Menge von [durch Leerzeichen getrennten Tokens](#tokenliste), die aus Detailtokens für die Autovervollständigung besteht, ergänzt durch optionale Abschnitts- sowie Versand- oder Rechnungsgruppierungs-Tokens. Telefonnummern, E-Mail-Adressen und Messaging-Protokoll-Tokens werden durch ein Token identifiziert, das den Empfängertyp angibt.

Siehe das [WHATWG-Standarddokument](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Tokenliste

Die Optionen der `<token-list>` umfassen, in der Reihenfolge:

1. [Benannte Gruppen-Tokene](#benannte_gruppen)
2. [Gruppierungskennzeichner](#gruppierungskennzeichner)
3. [Detail-Tokens](#detail-tokens)
4. [Webautorisierungskennzeichen](#webautorisierungskennzeichen)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Wenn vorhanden, muss dieses Token das erste Token in der durch Leerzeichen getrennten Tokenliste sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen die Zeichenkette "section-" sind, case-insensitive, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, deren Tokens mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungskennzeichner

Ein optionaler `shipping` oder `billing` Gruppierungskennzeichner

- `shipping`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, ist Teil der Versandadresse oder Kontaktinformationen
- `billing`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, ist Teil der Rechnungsadresse oder Kontaktinformationen

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detail-Token-Liste enthält entweder einen Empfängertyp mit digitalen Kontaktdaten in dieser Reihenfolge oder eine durch Leerzeichen getrennte Tokenliste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Empfangstyp identifizieren, umfassen:

- `home`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, ist für die Kontaktaufnahme mit dem Empfänger in seiner Residenz.
- `work`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, ist für die Kontaktaufnahme mit dem Empfänger bei der Arbeit.
- `mobile`
  - : Der Kontakttyp, der durch nachfolgende Tokens identifiziert wird, ist für die Kontaktaufnahme mit dem Empfänger unabhängig vom Standort.
- `fax`
  - : Der Empfänger, der durch nachfolgende Tokens identifiziert wird, ist für ein Faxgerät.
- `pager`
  - : Der Empfänger, der durch nachfolgende Tokens identifiziert wird, ist für einen Pager oder einen Piepser.

##### Digitale Kontakt-Tokens

Das Token oder die Token-Gruppe für Telefonnummern oder die Komponenten eines nummerischen Teils, Telefonschnur, E-Mail-Adressen oder Instant Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Landesvorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Landesvorwahl, einschließlich eines länderspezifischen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit einem länderspezifischen Präfix angewendet, falls zutreffend.
    - `tel-local`
      - : Die Telefonnummer ohne Länder- oder Vorwahl. Dies kann weiter in zwei Teile unterteilt werden, für Telefonnummern, die eine Vermittlungsnummer und dann eine Nummer innerhalb des Vermittlungssystems haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonverlängerungscode innerhalb der Telefonnummer, wie ein Raum- oder Suite-Nummer in einem Hotel oder eine Bürodurchwahl innerhalb eines Unternehmens.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für ein Endpunkt eines Instant Messaging-Protokolls, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder Instant Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Tokenliste nicht durch einen Kontakttyp vorangestellt:

- `name`
  - : Das Feld erwartet den Wert als vollständigen Namen einer Person. Die Verwendung von `name` anstelle der Aufteilung des Namens in seine Bestandteile wird allgemein bevorzugt, um zu vermeiden, dass man sich mit der großen Vielfalt an menschlichen Namen und deren Struktur auseinandersetzen muss; jedoch können Sie die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Bestandteile aufteilen müssen:
    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Mrs.", "Mr.", "Miss", "Ms.", "Dr." oder "Mlle.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Nachname.
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Pseudonym.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Bei der Erstellung eines neuen Kontos oder der Änderung von Passwörtern sollte dieser Wert für ein Feld "Geben Sie Ihr neues Passwort ein" oder "Neues Passwort bestätigen" verwendet werden, im Gegensatz zu einem allgemeinen Feld "Geben Sie Ihr aktuelles Passwort ein", das vorhanden sein könnte. Dies kann vom Browser sowohl verwendet werden, um zu vermeiden, dass ein bestehendes Passwort versehentlich ausgefüllt wird, als auch um Unterstützung bei der Erstellung eines sicheren Passworts zu bieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein einmaliges Passwort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldeprozess verwendet wird.
    Es handelt sich meistens um einen Code, der über einen externen Mechanismus wie SMS, E-Mail oder Authenticator-Anwendung empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Firmen- oder Organisationsname, wie "Acme Widget Company" oder "Girl Scouts of America".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Ort der Adresse innerhalb seiner zweiten Verwaltungsebene (normalerweise eine Stadt oder ein Dorf) vollständig identifizieren, aber nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede individuelle Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei davon. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder ein anderer Ort, in dem sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Territoriumscode.
- `country-name`
  - : Ein Länder- oder Territoriumsname.
- `postal-code`
  - : Ein Postleitzahl (in den Vereinigten Staaten ist dies die Postleitzahl).

- `cc-name`
  - : Der vollständige Name, wie er auf oder mit einem Zahlungsmittel wie einer Kreditkarte gedruckt ist. Die Verwendung eines vollständigen Namensfeldes wird im Allgemeinen bevorzugt, anstelle das der Name in Teile aufgeteilt wird.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie auf einem Zahlungsmittel oder einer Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die eine Zahlungsmethode identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum der Zahlungsmethode, in der Regel im Format "MM/JJ" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem die Zahlungsmethode abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem die Zahlungsmethode abläuft.
- `cc-csc`
  - : Der Sicherheitscode des Zahlungsmittels; auf Kreditkarten ist dies die dreistellige Prüfnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, der in der durch `transaction-currency` angegebenen Währung für ein Zahlungsformular angegeben wird.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
- `bday`
  - : Ein Geburtsdatum als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Geburtsdatums.
    - `bday-month`
      - : Der Monat des Geburtsdatums.
    - `bday-year`
      - : Das Jahr des Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nichtbinär"), als Freitext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, beispielsweise eine Homepage oder die Adresse einer Unternehmenswebsite, je nach Kontext der anderen Felder im Formular.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktinformationen repräsentiert, die in den anderen Feldern im Formular angegeben sind.

#### Webautorisierungskennzeichen

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn` Token zuletzt eingefügt werden, um anzugeben, dass der User-Agent bei der Interaktion mit dem Steuerelement öffentliche Schlüsselanmeldeinformationen anzeigen soll.

- `webauthn`
  - : Vom Generator durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) Anmeldeinformationen, wie sie durch einen bedingten [navigator.credentials.get()](/de/docs/Web/API/CredentialsContainer/get) Aufruf gefordert werden (d.h. einen, der `mediation: 'conditional'` enthält). Wenn eingeschlossen, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmelden mit einem Schlüssel durch Formularautovervollständigung](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebenenfelder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungseinheit; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Ländernamen.

### Flexibilität im Formularlayout

Da verschiedene Länder ihre Adresse auf unterschiedliche Weise darstellen, mit jedem Feld an unterschiedlichen Stellen innerhalb der Adresse und sogar in verschiedenen Sets und vollkommen unterschiedlichen Feldern, kann es hilfreich sein, wenn Ihre Website, wann immer möglich, in der Lage ist, zum Layout zu wechseln, das die Benutzer erwarten, wenn ein Adresseneingabeformular angezeigt wird, in Anbetracht des Landes, in dem sich die Adresse befindet.

### Variationen

Die Verwendung jeder Verwaltungsebene variiert von Land zu Land. Nachfolgend finden Sie einige Beispiele; dies ist nicht als vollständige Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse in den Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung des US-Postdienstes für "Kalifornien"). Daher ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitwenig spezifische Teil der Adresse ist der Stadt- oder Ortsname, also `address-level2` ist "Exampleville" in diesem Beispiel.

Vereinigte Staaten Adressen verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adressformulare im Vereinigten Königreich sollten ein oder zwei Adressstufen und eine, zwei oder drei Adresszeilen enthalten, je nach Adresse. Eine vollständige Adresse würde so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Ortschaft — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus/Straße — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um erfolgreich Post im Vereinigten Königreich zuzustellen, sodass sie die einzigen Pflichtangaben sein sollten, aber normalerweise neigen die Menschen dazu, mehr Details anzugeben.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: Provinz, Stadt und Bezirk.

Der 6-stellige Postleitzahl wird nicht immer benötigt, aber wenn sie angegeben wird, wird sie separat mit einer Kennzeichnung angezeigt. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge von den am wenigsten spezifischen zu den spezifischeren Teilen (im **Gegensatz zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Zusätzliche Zeilen können verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Bezirke, Dörfer und Gemeinden verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Grundstücksnummer besteht.

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
