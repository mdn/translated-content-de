---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern festzulegen, ob und in welchem Umfang der {{Glossary("user_agent", "User-Agent")}} automatisierte Unterstützung beim Ausfüllen von Formularfeldern bieten darf, sowie dem Browser Hinweise zu geben, welche Art von Informationen im Feld erwartet wird.

Es ist verfügbar bei {{HTMLElement("input")}}-Elementen, die Text- oder Zahlenwerte als Eingabe nehmen, {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

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

Das Attribut `autocomplete` bietet dem User-Agent einen Hinweis darauf, wie bzw. ob ein Formularsteuerungselement vorausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off`, `on` oder eine geordnete Liste von mit Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **eigenen Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das eigene Formular ist entweder das {{HTMLElement("form")}}, das mit der `id` übereinstimmt, die durch das [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut des Elements angegeben ist (falls vorhanden), oder, häufiger, das `<form>`, in dem das Element eingebettet ist.

> [!NOTE]
> Um Autovervollständigung bereitzustellen, können User-Agents von `<input>`/`<select>`/`<textarea>`-Elementen verlangen:
>
> 1. Ein Attribut `name` und/oder `id` zu haben.
> 2. Nachgeordnet zu einem `<form>`-Element zu sein.
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}}-Button zu stammen.

Wenn dieselbe Liste von Tokens in mehr als einem Formularsteuerungselement verwendet wird, wird der User-Agent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert vervollständigen.

Einige Tokens können mehrmals verwendet werden, möglicherweise mit unterschiedlichen erwarteten Werten, wie das `zip-code`-Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Das Einfügen mehrerer unterschiedlicher Tokens in eine durch Leerzeichen getrennte Liste gibt den zugehörigen Formularsteuerungselementen eindeutige Autocomplete-Werte: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autocomplete-Werte müssen möglicherweise mehrmals wiederverwendet werden. Zum Beispiel kann ein Formular mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` erwarten, jedoch unterschiedliche Werte. Um den Autocomplete-Wert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste ein `section-*`-Token sein, wobei die ersten acht Zeichen des Tokens immer der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, die das `section-*`-Token mit demselben alphanumerischen String haben, gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut auf {{HTMLElement("input/hidden", "hidden")}} Eingabeelementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt im Allgemeinen im Ermessen des Browsers; typischerweise stammen die Werte aus früher eingegebenen Benutzerwerten, sie können aber auch aus vorkonfigurierten Werten stammen. Ein Browser könnte beispielsweise dem Benutzer anbieten, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen zum Zweck der Autovervollständigung zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, zur Autovervollständigung nach einem Authentifizierungsverfahren.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox – im Gegensatz zu anderen Browsern – [den dynamischen deaktivierten Zustand und (falls zutreffend) den dynamischen Prüfstatus](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladungen hinweg beibehält. Die Persistenz-Funktion ist standardmäßig aktiviert. Wenn der Wert des `autocomplete`-Attributs auf `off` gesetzt wird, wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut aufgrund seines `type` normalerweise nicht anwendbar wäre. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`

  - : Der Browser darf den Wert für dieses Feld nicht automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autocomplete-Funktion bereitstellt oder dass aus Sicherheitsgründen der Wert des Feldes nicht automatisch eingegeben werden darf.

    > [!NOTE]
    > In den meisten modernen Browsern wird das Setzen von `autocomplete` auf `"off"` einen Passwort-Manager nicht davon abhalten, den Benutzer zu fragen, ob dieser Benutzername- und Passwortinformationen speichern möchte, oder diese Werte automatisch in ein Anmeldeformular der Website einfügt. Siehe [Verwaltung der Auto-Vervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`

  - : Der Browser darf die Eingabe automatisch vervollständigen. Es gibt keine Hinweise auf die Art der im Feld erwarteten Daten, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`

  - : Eine geordnete Menge von [Leerzeichen-getrennten Tokens](#token-list-tokens), die aus Auffüllungsdetail-Tokens besteht, denen optionale Sektions- und entweder Rechnungs- oder Versandgruppierungs-Tokens vorangehen. Telefonnummern, E-Mail-Adressen und Nachrichtenprotokoll-Tokens werden durch ein Token identifiziert, das den Typ des Empfängers angibt.

Weitere detaillierte Informationen finden Sie im [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill).

### Token-List-Tokens

Die `<token-list>` Optionen umfassen in der Reihenfolge:

1. [Gruppennamen-Token](#benannte_gruppen)
2. [Gruppierungskennzeichen](#gruppierungskennzeichen)
3. [Detail-Tokens](#detail-tokens)
4. [Web-Autorisierungs-Token](#web-autorisierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*`-Token verwendet werden. Wenn es vorhanden ist, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste von Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerungen. Ein Token, dessen erste acht Zeichen die Zeichenfolge "section-" (unabhängig von der Schreibweise) sind, gefolgt von weiteren Zeichen. Alle Formularsteuerungen, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungskennzeichen

Ein optionales `shipping` oder `billing` Gruppierungskennzeichen

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Versandadresse oder der Kontaktinformationen.
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Rechnungsadresse oder der Kontaktinformationen.

#### Detail-Tokens

Jede durch Leerzeichen getrennte Detail-Tokenliste enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Liste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Typ des Empfängers identifizieren, umfassen:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zur Kontaktaufnahme mit dem Empfänger an seinem Wohnsitz.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zur Kontaktaufnahme mit dem Empfänger an seiner Arbeitsstelle.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp dient zur Kontaktaufnahme mit dem Empfänger unabhängig vom Standort.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für ein Faxgerät bestimmt.
- `page`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für einen Pager oder Piepser bestimmt.

##### Digitale Kontakttokens

Das Token oder die Gruppe von Tokens für Telefonnummern oder deren Komponenten, Telefonnummernerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`

  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für die Felder verwenden:
    - `tel-country-code`
      - : Der Ländercode, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Landesvorwahlkomponente, einschließlich eines landesinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit jedem landesinternen Präfix, falls geeignet.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Vorwahl. Diese kann weiter in zwei Teile geteilt werden, für Telefonnummern, die eine Tauschziffer und dann eine Nummer innerhalb des Tauschs haben. Bei der Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonnummernerweiterungscode innerhalb der Telefonnummer, wie ein Zimmer- oder Suitennummer in einem Hotel oder eine Büroerweiterung in einer Firma.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für ein Instant-Messaging-Protokoll-Endpunkt, z.B. `xmpp:username@example.net`.

##### Weitere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Liste von Tokens nicht durch einen Kontakttyp vorangestellt:

- `name`

  - : Das Feld erwartet den Wert, den vollständigen Namen einer Person zu enthalten. Die Verwendung von `name` anstelle einer Aufschlüsselung des Namens in seine Komponenten wird im Allgemeinen bevorzugt, da dies das Problem vermeidet, mit der großen Vielfalt an menschlichen Namen und deren Strukturierung umgehen zu müssen; jedoch können Sie die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Komponenten unterteilen müssen:

    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Frau", "Herr", "Fräulein", "Dr.", oder "Mlle.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der zusätzliche Name (zweiter Vorname).
    - `family-name`
      - : Der Familienname.
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW", oder "IV".
    - `nickname`
      - : Ein Spitzname oder Benutzername.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Dies sollte für ein "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie neues Passwort"-Feld verwendet werden, anstelle eines allgemeinen "Geben Sie Ihr aktuelles Passwort ein"-Felds, das möglicherweise vorhanden ist. Dies kann vom Browser sowohl verwendet werden, um zu vermeiden, dass ein bestehendes Passwort versehentlich ausgefüllt wird, als auch um Unterstützung bei der Erstellung eines sicheren Passworts zu bieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein Einmalkennwort (OTP) zur Überprüfung der Benutzeridentität, das als zusätzlicher Faktor in einem Anmeldeablauf verwendet wird. Am häufigsten ist dies ein Code, der über einen außerhalb des Kanals liegenden Mechanismus, wie SMS, E-Mail oder Authentifikator-Anwendung, empfangen wird.
- `organization-title`
  - : Eine Berufsbezeichnung oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Unternehmens- oder Organisationsname, wie "Acme Widget Company" oder "Girl Scouts of America".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb der zweiten Verwaltungsebene (normalerweise einer Stadt oder Gemeinde) vollständig identifizieren, jedoch sollte es nicht den Stadtnamen, die Postleitzahl oder den Ländernamen enthalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen, die vier Ebenen haben.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen) in Adressen mit mindestens zwei Ebenen. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder eine andere Gemeinde, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist in der Regel die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietsname.
- `postal-code`

  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies der ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf oder mit einem Zahlungsinstrument wie einer Kreditkarte gedruckt ist. Die Verwendung eines vollen Namensfeldes wird bevorzugt, typischerweise, anstelle einer Aufschlüsselung des Namens in Einzelteile.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsinstrument wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie auf einem Zahlungsinstrument oder einer Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Familienname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Zahl, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise in der Form "MM/YY" oder "MM/YYYY".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsinstrument; bei Kreditkarten ist dies die 3-stellige Prüfnummer auf der Rückseite der Karte.
- `cc-type`
  - : Der Typ des Zahlungsmittels (z.B. "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiger [BCP 47-Sprachtag](https://en.wikipedia.org/wiki/IETF_language_tag).
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine geschlechtliche Identität (z.B. "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als Freitext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, z.B. eine Homepage oder Unternehmenswebseitenadresse, wie im Kontext der anderen Felder im Formular angemessen.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die Kontaktinformationen darstellt, die in den anderen Feldern im Formular angegeben sind.

#### Web-Autorisierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token zuletzt eingefügt werden, um anzuzeigen, dass der User-Agent beim Benutzerinteragieren mit dem Steuerelement öffentliche Schlüsselanmeldeinformationen anzeigen soll.

- `webauthn`
  - : Zugangsschlüssel, die von der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert werden, wie sie von einem bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf angefordert werden (d.h. einer, der `mediation: 'conditional'` enthält). Falls enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Token-Liste. Siehe [Anmeldung mit einem Zugangsschlüssel per Formulareingabe] (https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebenen-Felder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge arrangieren, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die umfassendste Verwaltungseinheit; sie ist der am wenigsten spezifische Teil der Adresse vor dem Ländernamen.

### Flexibilität bei der Formularanordnung

Da unterschiedliche Länder ihre Adressen auf unterschiedliche Weise schreiben, mit jedem Feld an verschiedenen Stellen innerhalb der Adresse und sogar mit unterschiedlichen Sets und Zahlen von Feldern, kann es hilfreich sein, wenn Ihre Seite, wann immer möglich, die von Ihren Benutzern erwartete Anordnung verwenden kann, wenn ein Adresseneingabeformular präsentiert wird, angesichts des Landes, in dem sich die Adresse befindet.

### Variationen

Die Verwendung jeder Verwaltungsebene variiert von Land zu Land. Im Folgenden einige Beispiele; dies ist nicht als erschöpfende Liste gedacht.

#### Vereinigte Staaten

Eine typische Wohnadresse in den Vereinigten Staaten sieht etwa so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung der US-Post für "Kalifornien"). Daher ist `address-level1` der Staat oder "CA" in diesem Fall.

Der zweitwenig-spezifische Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` "Exampleville" in diesem Beispiel.

Adressen der Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseneingabeformulare im Vereinigten Königreich sollten ein oder zwei Adresseneinheiten und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse sähe etwa so aus:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Der Postort — "Winchelsea" in diesem Fall.
- `address-line2`: Die Ortsteil — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßenangaben — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um im Vereinigten Königreich Post erfolgreich zuzustellen, sodass diese die einzigen Pflichtpunkte sein sollten, aber in der Regel neigen die Leute dazu, mehr Details anzugeben.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl ist nicht immer erforderlich, wird aber wenn vorhanden separat mit einem Label zur Klarheit platziert. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge vom am wenigsten spezifischen zum spezifischeren Teil (im **Umgekehrten zu den Vereinigten Staaten**). In einer Adresse befinden sich zwei oder drei Verwaltungsebenen. Zusätzlich kann eine Zeile verwendet werden, um Gebäudenamen und Zimmernummern zu zeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Landkreise, Dörfer und Ortschaften verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Losnummer besteht.

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
