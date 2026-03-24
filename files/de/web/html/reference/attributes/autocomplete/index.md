---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 2456adac96280a9c78696fa4a0a87810671c3a8d
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern, anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "User Agent")}} automatisierte Unterstützung bei der Eingabe von Formularfeldern geben darf und welche Art von Informationen im Feld erwartet wird.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die Text- oder numerische Werte als Eingabe akzeptieren, auf {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

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

Das `autocomplete`-Attribut gibt dem User Agent einen Hinweis darauf, ob und wie ein Formularfeld vorab ausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<textarea autocomplete="shipping street-address"></textarea>
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **zugrunde liegenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das zugrunde liegende Formular ist entweder das {{HTMLElement("form")}}, das zur `id` passt, die durch das [`form`](/de/docs/Web/HTML/Reference/Attributes/form)-Attribut des Elements angegeben ist (falls vorhanden), oder häufiger das `<form>`, in das das Element eingebettet ist.

> [!NOTE]
> Um Autovervollständigung bereitzustellen, können User Agents von `<input>`/`<select>`/`<textarea>`-Elementen verlangen:
>
> 1. Ein `name`- und/oder `id`-Attribut zu haben
> 2. Nachkommen eines `<form>`-Elements zu sein
> 3. Zu einem Formular zu gehören, das über einen {{HTMLElement("input/submit", "submit")}}-Button verfügt

Wenn dieselbe Liste von Tokens in mehr als einem Formular-Steuerelement verwendet wird, wird der User Agent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert autovervollständigen.

Einige Tokens können mehrmals mit möglicherweise unterschiedlichen erwarteten Werten verwendet werden, wie z.B. das `zip-code`-Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Das Einfügen mehrerer verschiedener Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass die zugehörigen Formular-Steuerelemente eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autocomplete-Werte müssen möglicherweise mehrmals wiederverwendet werden. Ein Formular kann z.B. mehrere Versandadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"` mit verschiedenen erwarteten Werten. Um den Autocomplete-Wert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*`-Token sein, wobei die ersten acht Zeichen des Tokens immer der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, die dasselbe `section-*`-Token mit demselben alphanumerischen String haben, gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete`-Attribut auf {{HTMLElement("input/hidden", "hidden")}}-Eingabeelementen (`<input type="hidden">`) vorhanden ist, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt gewöhnlich beim Browser; normalerweise stammen die Werte von zuvor eingegebenen Werten des Benutzers, sie können jedoch auch von vorkonfigurierten Werten stammen. Zum Beispiel könnte ein Browser den Benutzer dazu veranlassen, seinen Namen, Adresse, Telefonnummer und E-Mail-Adressen für Autocomplete-Zwecke zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um sie nach einer Authentifizierungsprozedur automatisch zu vervollständigen.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox - im Gegensatz zu anderen Browsern - [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Markierung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>`-Formulars über Seitenladungen hinweg beibehält. Die Persistenzfunktion ist standardmäßig aktiviert. Durch Setzen des Wertes des `autocomplete`-Attributs auf `off` wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht anwendbar wäre. Siehe [Firefox Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`
  - : Dem Browser ist es nicht gestattet, automatisch einen Wert in dieses Feld einzutragen oder auszuwählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bereitstellt oder dass Sicherheitsbedenken verlangen, dass der Wert des Feldes nicht automatisch eingetragen wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Einstellen von `autocomplete` auf `"off"` nicht, dass ein Passwort-Manager den Benutzer fragt, ob er Benutzernamen und Passworteingaben speichern möchte oder dass diese Werte automatisch in ein Anmeldeformular einer Website eingetragen werden. Siehe [Verwaltung der automatischen Ausfüllung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Dem Browser ist es erlaubt, die Eingabe automatisch zu vervollständigen. Es wird keine Anleitung gegeben, welche Art von Daten in dem Feld erwartet wird, daher kann der Browser nach eigenem Ermessen vorgehen.

- `<token-list>`
  - : Ein geordneter Satz von [durch Leerzeichen getrennten Tokens](#tokenliste_tokens), bestehend aus Details zu automatischen Ausfüllungstokens, die optionalen Abschnitts- und entweder Rechnungs- oder Versandgruppierungs-Tokens nachgestellt sind. Telefonnummern, E-Mail-Adressen und Messaging-Protokoll-Tokens werden von einem Token angeben, welcher den Typ des Empfängers identifiziert, eingeführt.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Tokenliste Tokens

Die Optionen für die `<token-list>` umfassen, in dieser Reihenfolge:

1. [Gruppenbenennungstoken](#benannte_gruppen)
2. [Gruppierungsidentifikator](#gruppierungsidentifikator)
3. [Detailtokens](#detail-tokens)
4. [Web-Authentifizierung](#web-authentifizierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Wenn es vorhanden ist, muss dieses Token das erste Token in der durch Leerzeichen getrennten Liste der Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularelementen. Ein Token, dessen erste acht Zeichen der String "section-" sind, ohne Berücksichtigung der Groß- und Kleinschreibung, gefolgt von weiteren Zeichen. Alle Formularelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungsidentifikator

Ein optionales `shipping` oder `billing`-Gruppierungsidentifikator

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Versandadresse oder Kontaktinformationen
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld ist Teil der Rechnungsadresse oder Kontaktinformationen

#### Detail-Tokens

Jede durch Leerzeichen getrennte Liste von Detail-Tokens enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen, in dieser Reihenfolge, oder eine durch Leerzeichen getrennte Liste anderer Tokens.

##### Empfängertyp

Die Tokens, die die Art des Empfängers identifizieren, umfassen:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp ist zum Kontaktieren des Empfängers an seinem Wohnsitz.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp ist zum Kontaktieren des Empfängers an seinem Arbeitsplatz.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontakttyp ist zum Kontaktieren des Empfängers, unabhängig vom Standort.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für ein Faxgerät.
- `pager`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für einen Pager oder einen Rufempfänger.

##### Digitale Kontakt-Tokens

Das Token oder die Gruppe von Tokens für Telefonnummern oder Komponententeile einer Nummer, Telefonerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Landesvorwahl. Wenn Sie die Telefonnummer in ihre Komponenten unterteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Landesvorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die vollständige Telefonnummer ohne die Landesvorwahl-Komponente, einschließlich einer nationalen Vorwahl. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Ortsvorwahl, mit gegebenenfalls anhaftendem nationalen Präfix.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Ortsvorwahl. Diese kann weiter in zwei Teile aufgeteilt werden, für Telefonnummern, die eine Durchwahl-Nummer und eine Nummer innerhalb der Durchwahl haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein telefonischer Anschluss-Code innerhalb der Telefonnummer, wie eine Raum- oder Suitenummer in einem Hotel oder eine Büroerweiterung in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für ein instant messaging Protokoll-Endpunkt, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Liste der Tokens nicht durch einen Kontakttyp vorangestellt:

- `name`
  - : Das Feld erwartet den Wert, ein vollständiger Name einer Person zu sein. Die Verwendung von `name` anstatt den Namen in seine Komponenten zu unterteilen ist allgemein bevorzugt, da es die Vielzahl an menschlichen Namen und deren Strukturierung vermeidet; allerdings können Sie die folgenden `autocomplete`-Werte verwenden, wenn Sie den Namen in seine Komponenten unterteilen müssen:
    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Frau", "Herr", "Fräulein", "Frau Dr." oder "Mademoiselle".
    - `given-name`
      - : Der Vorname (oder "erste" Name).
    - `additional-name`
      - : Der zweite Vorname.
    - `family-name`
      - : Der Nachname (oder "Familienname").
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW" oder "IV".
    - `nickname`
      - : Ein Spitzname oder Handle.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Wenn Sie ein neues Benutzerkonto erstellen oder das Passwort ändern, sollte dies für ein Feld wie "Neues Passwort eingeben" oder "Neues Passwort bestätigen" verwendet werden, im Gegensatz zu einem allgemeinen "Aktuelles Passwort eingeben"-Feld, das möglicherweise vorhanden ist. Dies kann vom Browser verwendet werden, um zu verhindern, dass ein bestehendes Passwort versehentlich ausgefüllt wird, und um Unterstützung bei der Erstellung eines sicheren Passworts anzubieten.
- `current-password`
  - : Das aktuelle Passwort des Benutzers.
- `one-time-code`
  - : Ein einmaliges Passwort (OTP) zur Verifizierung der Benutzeridentität, das als zusätzlicher Faktor im Anmeldeablauf verwendet wird. Häufig wird dieser Code über einen anderen Kanal empfangen, wie SMS, E-Mail oder Authenticator-App.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "Präsident" oder "Assistent des Gruppenleiters".
- `organization`
  - : Der Name einer Firma oder Organisation, wie "Acme Widget Company" oder "Pfadfinderinnen von Amerika".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Standort der Adresse innerhalb ihrer zweiten Verwaltungsstufe (typischerweise eine Stadt oder ein Dorf) vollständig identifizieren, jedoch nicht den Stadtnamen, Postleitzahl oder Ländernamen.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die präziseste [Verwaltungsstufe](#verwaltungsebenen_in_adressen), in Adressen mit vier Stufen.
- `address-level3`
  - : Die dritte [Verwaltungsstufe](#verwaltungsebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsstufen.
- `address-level2`
  - : Die zweite [Verwaltungsstufe](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei von ihnen. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf oder die Ortschaft, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsstufe](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Ländercode oder Gebietscode.
- `country-name`
  - : Ein Länder- oder Gebietename.
- `postal-code`
  - : Eine Postleitzahl (in den Vereinigten Staaten wäre dies die PLZ).

- `cc-name`
  - : Der vollständige Name, wie auf oder in Verbindung mit einem Zahlungsinstrument wie einer Kreditkarte angegeben. Das Verwenden eines vollständigen Namensfelds wird im Allgemeinen bevorzugt, anstatt den Namen in Teile zu unterteilen.
    - `cc-given-name`
      - : Ein Vorname, wie er auf einem Zahlungsinstrument wie einer Kreditkarte angegeben ist.
    - `cc-additional-name`
      - : Ein zweiter Vorname, wie er auf einem Zahlungsinstrument oder einer Kreditkarte angegeben ist.
    - `cc-family-name`
      - : Ein Nachname, wie er auf einer Kreditkarte angegeben ist.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die eine Zahlungsmethode identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Zahlungsablaufdatum, typischerweise in der Form "MM/YY" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem die Zahlungsmethode abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem die Zahlungsmethode abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsinstrument; bei Kreditkarten ist dies die 3-stellige Verifizierungsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Die Art des Zahlungsinstruments (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion durchgeführt werden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der vom `transaction-currency` angegebenen Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}}.
- `bday`
  - : Ein Geburtsdatum, als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht-binär"), als Freiformtext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Homepage oder Firmenwebsite-Adresse je nach Kontext der anderen Felder im Formular.
- `photo`
  - : Die URL eines Bildes, das die Person, Firma oder Kontaktinformationen in den anderen Feldern des Formulars darstellt.

#### Web-Authentifizierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}} kann das `webauthn`-Token letzte in der Liste aufgenommen werden, um anzugeben, dass der User Agent öffentliche Schlüssel-Berechtigungen anzeigen soll, wenn der Benutzer mit dem Steuerelement interagiert.

- `webauthn`
  - : Passkeys, die durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) generiert wurden, wie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf angefordert (d.h. ein solcher, der `mediation: 'conditional'` enthält). Wenn aufgenommen, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Weitere Einzelheiten finden Sie unter [Anmelden mit einem Passkey durch Form-Autovervollständigung](https://web.dev/articles/passkey-form-autofill).

## Barrierefreiheit

Die Verwendung geeigneter `autocomplete`-Werte hilft Benutzern mit kognitiven Behinderungen, motorischen Beeinträchtigungen und anderen Bedingungen, Formulare schneller und genauer auszufüllen, indem die Notwendigkeit reduziert wird, Informationen einzugeben und sich zu merken. Wenn der Browser den Zweck eines Formularfelds durch dessen `autocomplete`-Wert identifizieren kann, kann er gespeicherte Daten wie Namen, Adressen und Zahlungsdetails anbieten, was allen Benutzern zugute kommt, aber besonders wichtig für diejenigen ist, die Schwierigkeiten mit manueller Dateneingabe haben.

Die Bereitstellung gültiger Autocomplete-Tokens erfüllt auch [WCAG 2.2 Erfolgskriterium 1.3.5: Eingabezweck identifizieren](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (Level AA), das verlangt, dass der Zweck der Eingabefelder, die Benutzerinformationen sammeln, programmgesteuert bestimmt werden kann. Dies ermöglicht es User Agents und assistiven Technologien, personalisierte Präsentationen anzuwenden, wie das Anzeigen vertrauter Symbole neben Feldern, um Benutzern beim Verstehen und Ausfüllen von Formularen zu helfen.

### Vermeiden Sie das Deaktivieren der Autovervollständigung

Das Setzen von `autocomplete="off"` verhindert, dass der Browser gespeicherte Daten für ein Feld anbietet. Während Entwickler dies manchmal aus Sicherheitsgründen (wie ein-verbrauchten Codes) verwenden, entfernt es eine Funktion, von der viele Benutzer abhängen. Benutzer mit kognitiven Behinderungen können auf Autovervollständigung angewiesen sein, um sich persönliche Informationen zu merken, und Benutzer mit motorischen Beeinträchtigungen profitieren von reduzierter Eingabe. Browser können `autocomplete="off"` möglicherweise auch bei Anmeldefeldern ignorieren, um Passwort-Manager zu unterstützen.

### Vermeiden Sie ungültige Autocomplete-Werte

Die Verwendung ungültiger oder nicht standardmäßiger Werte (wie erfundene Strings, um die automatische Vervollständigung zu umgehen) hat einen ähnlichen Effekt: Der Browser kann das Feld keinem bekannten Zweck zuordnen, sodass er keine relevanten Vorschläge unterbreiten kann. Auch dies erfüllt das oben genannte WCAG-Anforderung nicht mehr, da der Eingabezweck nicht mehr programmgesteuert bestimmbar ist. Wenn Sie die automatische Vervollständigung für ein bestimmtes Feld deaktivieren müssen, sollten Sie `autocomplete="off"` nur dort verwenden, wo es wirklich notwendig ist (wie bei CAPTCHA- oder einmaligen Tokenfeldern), anstatt es umfassend in einem Formular anzuwenden.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsfelder (`address-level1` bis `address-level4`) beschreiben die Adresse im Hinblick auf wachsende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlichen Ordnungen anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungsebene; es ist der am wenigsten spezifische Teil der Adresse, abgesehen vom Ländernamen.

### Formularlayout-Flexibilität

Da verschiedene Länder ihre Adressen auf unterschiedliche Weisen schreiben, mit jedem Feld an verschiedenen Orten innerhalb der Adresse, und manchmal auch mit unterschiedlichen Mengen und Sätzen von Feldern, kann es hilfreich sein, wenn Ihre Website nach Möglichkeit das Layout entsprechend dEN Erwartungen Ihrer Nutzer anpassen kann, wenn ein Adresseneingabeformular angezeigt wird, je nachdem, in welchem Land sich die Adresse befindet.

### Variationen

Die Verwendung jeder Verwaltungsebene wird von Land zu Land variieren. Nachfolgend einige Beispiele; dies soll keine erschöpfende Liste sein.

#### Vereinigte Staaten

Eine typische Wohnadresse innerhalb der Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung der US-Post für "Kalifornien"). Daher ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitunpräziseste Teil der Adresse ist der Stadt- oder Ortsname, daher ist `address-level2` "Exampleville" in diesem Beispiel.

Adressen in den Vereinigten Staaten verwenden keine Ebenen 3 und höher.

#### Vereinigtes Königreich

Adresseingabeformulare im Vereinigten Königreich sollten ein oder zwei Adressebenen und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse könnte so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft – "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt – "Winchelsea" in diesem Fall.
- `address-line2`: Die Ortschaft – "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus/Straßenangaben – "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um in Großbritannien erfolgreich Post zuzustellen, sodass diese die einzigen Pflichtbereiche sein sollten, aber meistens geben Menschen mehr Details an.

#### China

China kann bis zu drei Verwaltungsebenen verwenden: die Provinz, die Stadt und den Bezirk.

Die 6-stellige Postleitzahl ist nicht immer erforderlich, aber wenn sie bereitgestellt wird, wird sie zur Klarheit separat mit einem Label angegeben. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge von dem am wenigsten spezifischen zu spezifischeren Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). Es gibt zwei oder drei Verwaltungsebenen in einer Adresse. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Zimmernummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder das Tokyo Metropolis verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Bezirke, Städte und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Gebietsnamen und einer Losnummer besteht.

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
