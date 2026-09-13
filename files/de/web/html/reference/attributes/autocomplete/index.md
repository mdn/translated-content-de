---
title: "`autocomplete` HTML-Attribut"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

Das HTML-Attribut `autocomplete` ermöglicht es Webentwicklern, anzugeben, ob und in welchem Umfang der {{Glossary("user_agent", "nutzeragent")}} automatische Unterstützung beim Ausfüllen von Formularfeldern leisten darf, sowie dem Browser Hinweise zu geben, welche Art von Informationen im Feld erwartet werden.

Es ist verfügbar für {{HTMLElement("input")}}-Elemente, die Text- oder numerische Werte als Eingabe akzeptieren, {{HTMLElement("textarea")}}-Elemente, {{HTMLElement("select")}}-Elemente und {{HTMLElement("form")}}-Elemente.

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

Das `autocomplete` Attribut gibt dem Nutzeragenten einen Hinweis, wie oder ob ein Formularsteuerelement vorausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<textarea autocomplete="shipping street-address"></textarea>
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Element kein `autocomplete` Attribut hat, wird der Browser das [`autocomplete` Attribut des **besitzenden Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete) verwenden. Das besitzende Formular ist entweder das {{HTMLElement("form")}}, das der im Attribut [`form`](/de/docs/Web/HTML/Reference/Attributes/form) spezifizierten `id` des Elements entspricht (falls vorhanden), oder, häufiger, das `<form>`, in dem das Element verschachtelt ist.

> [!NOTE]
> Um die Autovervollständigung zu ermöglichen, können Nutzeragenten verlangen, dass `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name` und/oder `id`-Attribut haben
> 2. Nachfahren eines `<form>`-Elements sind
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}}-Button besessen werden

Wenn dieselbe Tokenliste in mehr als einem Formularsteuerelement verwendet wird, wird der Nutzeragent alle Vorkommen desselben `autocomplete`-Wertes mit demselben Datenwert autovervollständigen.

Einige Tokens können mehr als einmal mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie z. B. das `postal-code` Token in einem Formular, das sowohl Versand- als auch Rechnungsadressen enthält. Die Verwendung mehrerer unterschiedlicher Tokens in einer durch Leerzeichen getrennten Liste führt dazu, dass die zugehörigen Formularsteuerelemente eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping postal-code"` und `autocomplete="billing postal-code"`.

Einige Autocomplete-Werte müssen möglicherweise mehrfach verwendet werden. Zum Beispiel kann ein Formular mehrere Versandadressen enthalten und daher mehrfache Vorkommen von `"shipping postal-code"` erwarten, während es dennoch unterschiedliche Werte anfordert. Um den Autocomplete-Wert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Tokenliste ein `section-*` Token sein, wobei die ersten acht Zeichen des Tokens immer der String "section-" sind, gefolgt von einem alphanumerischen String. Alle Formularfelder, die das identische `section-*` Token mit demselben alphanumerischen String haben, gehören zur selben **benannten Gruppe**.

Wenn das `autocomplete` Attribut auf {{HTMLElement("input/hidden", "hidden")}} Eingabeelementen (`<input type="hidden">`) enthalten ist, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht zulässig.

Die Quelle der vorgeschlagenen Werte liegt in der Regel beim Browser; typischerweise stammen die Werte aus früher eingegebenen Werten des Nutzers, aber sie können auch aus vorkonfigurierten Werten stammen. Zum Beispiel könnte ein Browser dem Nutzer ermöglichen, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen für Autovervollständigungszwecke zu speichern. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, um eine Autovervollständigung nach einer Authentifizierungsprozedur zu ermöglichen.

> [!NOTE]
> Das `autocomplete` Attribut steuert auch, ob Firefox — im Gegensatz zu anderen Browsern — den dynamischen deaktivierten Status und (falls zutreffend) die dynamische Überprüfung eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladezyklen hinweg beibehält. Die Persistenzfunktion ist standardmäßig aktiviert. Wenn der Wert des `autocomplete`-Attributs auf `off` gesetzt wird, wird diese Funktion deaktiviert. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht angewendet wird. Siehe [Firefox Fehler 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`
  - : Der Browser darf keinen Wert für dieses Feld automatisch eingeben oder auswählen. Es ist möglich, dass das Dokument oder die Anwendung über eine eigene Autovervollständigungsfunktion verfügt, oder dass Sicherheitsbedenken vorschreiben, dass der Wert des Feldes nicht automatisch eingetragen wird.

    > [!NOTE]
    > In den meisten modernen Browsern verhindert das Setzen von `autocomplete` auf `"off"` nicht, dass ein Passwortmanager den Nutzer fragt, ob er Benutzername und Passwort speichern möchte, oder diese Werte automatisch in ein Anmeldeformular der Seite einfüllt. Siehe [Verwalten der Autofill für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`
  - : Der Browser darf die Eingabe automatisch vervollständigen. Es werden keine Hinweise auf die Art der im Feld erwarteten Daten gegeben, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`
  - : Ein geordneter Satz von [durch Leerzeichen getrennten Tokens](#token-listen-tokens), bestehend aus Autofill-Detailtokens, denen optionale Abschnitts- und entweder Rechnungs- oder Versandgruppiertokens vorangestellt werden. Telefonnummern, E-Mail-Adressen und Messaging-Protokolltokens werden durch ein Token identifiziert, das die Art des Empfängers angibt.

Siehe den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Listen-Tokens

Die `<token-list>` Optionen umfassen, in folgender Reihenfolge:

1. [Gruppenbenennungstoken](#benannte_gruppen)
2. [Gruppenkennzeichnung](#gruppenkennzeichnung)
3. [Detail-Tokens](#detail-tokens)
4. [Web-Autorisierung](#web-autorisierungs-token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann das optionale `section-*` Token verwendet werden. Wenn es vorhanden ist, muss dieses Token das erste in der durch Leerzeichen getrennten Tokenliste sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen der String "section-" sind, ohne Beachtung der Groß-/Kleinschreibung, gefolgt von weiteren Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppenkennzeichnung

Ein optionaler `shipping` oder `billing` Gruppenkennzeichner

- `shipping`
  - : Das durch nachfolgende Tokens identifizierte Feld gehört zur Versandadresse oder Kontaktinformation
- `billing`
  - : Das durch nachfolgende Tokens identifizierte Feld gehört zur Rechnungsadresse oder Kontaktinformation

#### Detail-Tokens

Jeder durch Leerzeichen getrennte Detail-Token-Liste enthält entweder einen Empfängertyp mit digitalen Kontaktinformationen in dieser Reihenfolge oder eine durch Leerzeichen getrennte Tokenliste anderer Tokens.

##### Empfängertyp

Die Tokens, die den Empfängertyp identifizieren, sind:

- `home`
  - : Der durch nachfolgende Tokens identifizierte Kontakt ist für das Erreichen des Empfängers an seiner Wohnadresse.
- `work`
  - : Der durch nachfolgende Tokens identifizierte Kontakt ist für das Erreichen des Empfängers an seinem Arbeitsplatz.
- `mobile`
  - : Der durch nachfolgende Tokens identifizierte Kontakt ist für das Erreichen des Empfängers unabhängig vom Standort.
- `fax`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für ein Faxgerät.
- `pager`
  - : Der durch nachfolgende Tokens identifizierte Empfänger ist für einen Pager oder Piepser.

##### Digitale Kontakt-Tokens

Das Token oder die Token-Gruppe für Telefonnummern oder Komponententeile von Nummern, Telefonerweiterungen, E-Mail-Adressen oder Instant-Messaging-Protokolle.

- `tel`
  - : Eine vollständige Telefonnummer, einschließlich der Ländervorwahl. Wenn Sie die Telefonnummer in ihre Komponenten aufteilen müssen, können Sie diese Werte für diese Felder verwenden:
    - `tel-country-code`
      - : Die Ländervorwahl, wie "1" für die Vereinigten Staaten, Kanada und andere Gebiete in Nordamerika und Teilen der Karibik.
    - `tel-national`
      - : Die gesamte Telefonnummer ohne die Komponente der Ländervorwahl, einschließlich eines landesinternen Präfixes. Für die Telefonnummer "1-855-555-6502" wäre der Wert dieses Feldes "855-555-6502".
    - `tel-area-code`
      - : Die Vorwahl, mit einem gegebenenfalls angewendeten landesinternen Präfix.
    - `tel-local`
      - : Die Telefonnummer ohne Landes- oder Vorwahl. Diese kann weiter in zwei Teile aufgespalten werden, für Telefonnummern, die eine Vermittlungsnummer und dann eine Nummer innerhalb der Vermittlung haben. Für die Telefonnummer "555-6502" verwenden Sie `tel-local-prefix` für "555" und `tel-local-suffix` für "6502".

- `tel-extension`
  - : Ein Telefonerweiterungscode innerhalb der Telefonnummer, wie eine Zimmernummer in einem Hotel oder eine Bürodurchwahl in einem Unternehmen.
- `email`
  - : Eine E-Mail-Adresse.
- `impp`
  - : Eine URL für einen Instant-Messaging-Protokoll-Endpunkt, wie `xmpp:username@example.net`.

##### Andere Tokens

Wenn das Formularfeld keine Telefonnummer, E-Mail-Adresse oder kein Instant-Messaging-Protokoll ist, wird die durch Leerzeichen getrennte Tokenliste nicht von einem Kontakttyp vorangestellt:

- `name`
  - : Das Feld erwartet den Wert als vollständigen Namen einer Person. Die Verwendung von `name` anstelle der Aufschlüsselung des Namens in seine Komponenten ist in der Regel bevorzugt, da dadurch Schwierigkeiten mit der breiten Vielfalt an Menschennamen und deren Struktur umgangen werden; jedoch können Sie die folgenden `autocomplete` Werte verwenden, wenn Sie den Namen in seine Komponenten aufteilen müssen:
    - `honorific-prefix`
      - : Der Präfix oder Titel, wie "Frau.", "Herr.", "Fräulein", "Ms.", "Dr." oder "Frl.".
    - `given-name`
      - : Der Vorname.
    - `additional-name`
      - : Der Mittelname.
    - `family-name`
      - : Der Nachname.
    - `honorific-suffix`
      - : Der Suffix, wie "Jr.", "B.Sc.", "PhD.", "MBASW", oder "IV".
    - `nickname`
      - : Ein Spitzname oder Benutzername.

- `username`
  - : Ein Benutzername oder Kontoname.
- `new-password`
  - : Ein neues Passwort. Beim Erstellen eines neuen Kontos oder beim Ändern von Passwörtern sollte dies für ein "Geben Sie Ihr neues Passwort ein" oder "Bestätigen Sie das neue Passwort" Feld verwendet werden, im Gegensatz zu einem allgemeinen "Geben Sie Ihr aktuelles Passwort ein" Feld, das möglicherweise vorhanden sein könnte. Dies kann vom Browser verwendet werden, um sowohl zu vermeiden, ein bestehendes Passwort versehentlich auszufüllen, als auch beim Erstellen eines sicheren Passworts zu helfen.
- `current-password`
  - : Das aktuelle Passwort des Nutzers.
- `one-time-code`
  - : Ein einmaliges Passwort (OTP) für die Verifizierung der Nutzeridentität, das als zusätzlicher Faktor in einem Anmeldevorgang verwendet wird.
    Am häufigsten handelt es sich um einen Code, der über einen kanalübergreifenden Mechanismus, wie SMS, E-Mail oder Authentifikatoranwendung, empfangen wird.
- `organization-title`
  - : Ein Jobtitel oder der Titel, den eine Person innerhalb einer Organisation hat, wie "Senior Technical Writer", "President" oder "Assistant Troop Leader".
- `organization`
  - : Ein Firmen- oder Organisationsname, wie "Acme Widget Company" oder "Girl Scouts of America".
- `street-address`
  - : Eine Straßenadresse. Dies kann mehrere Textzeilen umfassen und sollte den Ort der Adresse innerhalb ihrer zweiten Verwaltungsebene (normalerweise eine Stadt oder ein Dorf) vollständig identifizieren, jedoch nicht den Stadtnamen, die Postleitzahl oder den Ländernamen beinhalten.
    - `address-line1`, `address-line2`, `address-line3`
      - : Jede einzelne Zeile der Straßenadresse. Diese sollten nur vorhanden sein, wenn die `street-address` nicht vorhanden ist.
- `address-level4`
  - : Die feinste [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit vier Ebenen.
- `address-level3`
  - : Die dritte [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens drei Verwaltungsebenen.
- `address-level2`
  - : Die zweite [Verwaltungsebene](#verwaltungsebenen_in_adressen), in Adressen mit mindestens zwei davon. In Ländern mit zwei Verwaltungsebenen wäre dies typischerweise die Stadt, das Dorf, die Gemeinde oder eine andere Lokalität, in der sich die Adresse befindet.
- `address-level1`
  - : Die erste [Verwaltungsebene](#verwaltungsebenen_in_adressen) in der Adresse. Dies ist typischerweise die Provinz, in der sich die Adresse befindet. In den Vereinigten Staaten wäre dies der Staat. In der Schweiz der Kanton. Im Vereinigten Königreich die Grafschaft.
- `country`
  - : Ein Länder- oder Territoriencode.
- `country-name`
  - : Ein Länder- oder Territorienname.
- `postal-code`
  - : Eine Postleitzahl (in den Vereinigten Staaten ist dies die ZIP-Code).

- `cc-name`
  - : Der vollständige Name, wie er auf einem Zahlungsmittel wie einer Kreditkarte aufgedruckt ist oder damit verbunden ist. Die Verwendung eines vollständigen Namensfeldes ist in der Regel bevorzugt gegenüber der Aufspaltung des Namens in Einzelteile.
    - `cc-given-name`
      - : Ein Vorname, wie auf einem Zahlungsmittel wie einer Kreditkarte angegeben.
    - `cc-additional-name`
      - : Ein Mittelname, wie auf einem Zahlungsmittel oder Kreditkarte angegeben.
    - `cc-family-name`
      - : Ein Nachname, wie auf einer Kreditkarte angegeben.
- `cc-number`
  - : Eine Kreditkartennummer oder eine andere Nummer, die ein Zahlungsmittel identifiziert, wie eine Kontonummer.
- `cc-exp`
  - : Ein Ablaufdatum des Zahlungsmittels, typischerweise in der Form "MM/JJ" oder "MM/JJJJ".
    - `cc-exp-month`
      - : Der Monat, in dem das Zahlungsmittel abläuft.
    - `cc-exp-year`
      - : Das Jahr, in dem das Zahlungsmittel abläuft.
- `cc-csc`
  - : Der Sicherheitscode für das Zahlungsmittel; bei Kreditkarten ist dies die dreistellige Verifizierungsnummer auf der Rückseite der Karte.
- `cc-type`
  - : Die Art des Zahlungsmittels (wie "Visa" oder "Master Card").
- `transaction-currency`
  - : Die Währung, in der die Transaktion stattfinden soll.
- `transaction-amount`
  - : Der Betrag, angegeben in der durch `transaction-currency` spezifizierten Währung, der Transaktion, für ein Zahlungsformular.
- `language`
  - : Eine bevorzugte Sprache, angegeben als gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}.
- `bday`
  - : Ein Geburtsdatum als vollständiges Datum.
    - `bday-day`
      - : Der Tag des Monats eines Geburtsdatums.
    - `bday-month`
      - : Der Monat des Jahres eines Geburtsdatums.
    - `bday-year`
      - : Das Jahr eines Geburtsdatums.
- `sex`
  - : Eine Geschlechtsidentität (wie "Weiblich", "Fa'afafine", "Hijra", "Männlich", "Nicht binär"), als Freitext ohne Zeilenumbrüche.
- `url`
  - : Eine URL, wie eine Homepage oder Firmenwebsite-Adresse, je nachdem, was im Kontext der anderen Felder im Formular angebracht ist.
- `photo`
  - : Die URL eines Bildes, das die Person, das Unternehmen oder die in den anderen Feldern im Formular gegebenen Kontaktinformationen darstellt.

#### Web-Autorisierungs-Token

Mit {{htmlelement("input")}} und {{htmlelement("textarea")}}, das `webauthn` Token kann zuletzt hinzugefügt werden, um anzugeben, dass der Nutzeragent öffentliche Schlüsseldaten anzeigen soll, wenn der Nutzer mit dem Steuerelement interagiert.

- `webauthn`
  - : Passkey erstellt durch die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API), wie durch einen bedingten [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf angefordert (d.h. einer, der `mediation: 'conditional'` enthält). Wenn enthalten, ist dies das letzte Token in der durch Leerzeichen getrennten Tokenliste. Siehe [Anmeldung mit einem Passkey durch Autofill des Formulars](https://web.dev/articles/passkey-form-autofill) für weitere Details.

## Barrierefreiheit

Die Verwendung geeigneter `autocomplete`-Werte hilft Nutzern mit kognitiven Behinderungen, Bewegungsbeeinträchtigungen und anderen Bedingungen, Formulare schneller und genauer auszufüllen, indem die Notwendigkeit der Eingabe und Erinnerung an Informationen reduziert wird. Wenn der Browser den Zweck eines Formularfeldes durch dessen `autocomplete`-Wert identifizieren kann, kann er gespeicherte Daten wie Namen, Adressen und Zahlungsdetails anbieten, was allen Nutzern zugutekommt, aber besonders wichtig für diejenigen ist, die manuelle Dateneingaben als schwierig empfinden.

Das Bereitstellen von gültigen Autocomplete-Tokens erfüllt auch den [WCAG 2.2-Erfolgskriterium 1.3.5: Eingabezweck identifizieren](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) (Level AA), das erfordert, dass der Zweck der Eingabefelder, die Benutzerdaten sammeln, programmatisch bestimmbar ist. Dies ermöglicht es Nutzeragenten und unterstützenden Technologien, personalisierte Präsentationen anzuwenden, z. B. das Anzeigen vertrauter Symbole neben Feldern, um den Nutzern zu helfen, Formulare zu verstehen und auszufüllen.

### Vermeiden Sie, die Autovervollständigung zu deaktivieren

Das Setzen von `autocomplete="off"` verhindert, dass der Browser gespeicherte Daten für ein Feld anbietet. Auch wenn Entwickler dies manchmal aus Sicherheitsgründen (z.B. einmalige Codes) verwenden, entfernt es eine Funktion, auf die viele Nutzer angewiesen sind. Nutzer mit kognitiven Behinderungen verlassen sich möglicherweise auf die Autovervollständigung, um persönliche Informationen abzurufen, und Nutzer mit Bewegungsbeeinträchtigungen profitieren von der verringerten Tippmenge. Browser können auch `autocomplete="off"` bei Anmeldefeldern ignorieren, um Passwortmanager zu unterstützen.

### Vermeiden Sie ungültige Autocomplete-Werte

Die Verwendung ungültiger oder nicht-standardmäßiger Werte (z.B. erfundene Strings, um Autofill zu umgehen) hat einen ähnlichen Effekt: Der Browser kann das Feld keinem bekannten Zweck zuordnen und daher keine relevanten Vorschläge anbieten. Auch dies erfüllt das oben genannte WCAG-Anforderung nicht, da der Eingabezweck nicht mehr programmatisch bestimmbar ist. Wenn Sie Autofill für ein bestimmtes Feld deaktivieren müssen, sollten Sie `autocomplete="off"` nur dort verwenden, wo es wirklich notwendig ist (z.B. für CAPTCHA- oder Einmal-Code-Felder) anstatt es weit über ein Formular hinweg anzuwenden.

## Beispiele

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

### Verwaltungsebenen in Adressen

Die vier Verwaltungsebene-Felder (`address-level1` bis `address-level4`) beschreiben die Adresse in Bezug auf zunehmende Präzision innerhalb des Landes, in dem sich die Adresse befindet. Jedes Land hat sein eigenes System von Verwaltungsebenen und kann die Ebenen in unterschiedlicher Reihenfolge anordnen, wenn Adressen geschrieben werden.

`address-level1` repräsentiert immer die breiteste Verwaltungsebene; es ist der am wenigsten spezifische Teil der Adresse abgesehen vom Ländernamen.

### Flexibilität beim Formularlayout

Da verschiedene Länder ihre Adressen auf unterschiedliche Weisen schreiben, mit jeweils unterschiedlichen Feldern an unterschiedlichen Stellen innerhalb der Adresse und sogar mit unterschiedlichen Sätzen und Zahlen von Feldern insgesamt, kann es hilfreich sein, wenn Ihre Seite in der Lage ist, das vom erwarteten Layout bei der Präsentation eines Adresseneingabeformulars auf Basis des Landes, in dem sich die Adresse befindet, umzustellen.

### Variationen

Die Verwendung jeder Verwaltungsebene variiert von Land zu Land. Hier sind einige Beispiele; diese sind nicht als vollständige Liste gedacht.

#### Vereinigte Staaten

Eine typische Heimadresse in den Vereinigten Staaten sieht so aus:

432 Anywhere St
Exampleville CA 95555

In den Vereinigten Staaten ist der am wenigsten spezifische Teil der Adresse der Staat, in diesem Fall "CA" (die offizielle Abkürzung des US-Postdienstes für "California"). Somit ist `address-level1` der Staat, oder "CA" in diesem Fall.

Der zweitwenig spezifische Teil der Adresse ist der Stadt- oder Ortsname, weshalb `address-level2` "Exampleville" in diesem Adressbeispiel ist.

Adressen in den Vereinigten Staaten verwenden die Ebenen 3 und höher nicht.

#### Vereinigtes Königreich

Adresseingabeformulare im Vereinigten Königreich sollten ein oder zwei Adressebenen und eine, zwei oder drei Adresszeilen enthalten, abhängig von der Adresse. Eine vollständige Adresse würde so aussehen:

103 Frogmarch Street
Upper-Wapping
Winchelsea
Whereshire
TN99 8ZZ

Die Adressebenen sind:

- `address-level1`: Die Grafschaft — "Whereshire" in diesem Fall.
- `address-level2`: Die Poststadt — "Winchelsea" in diesem Fall.
- `address-line2`: Die Bezirks — "Upper-Wapping" in diesem Fall.
- `address-line1`: Die Haus-/Straßenangaben — "103 Frogmarch Street".

Die Postleitzahl ist separat. Beachten Sie, dass Sie tatsächlich nur die Postleitzahl und `address-line1` verwenden können, um Post erfolgreich im Vereinigten Königreich zuzustellen, daher sollten dies die einzigen Pflichtangaben sein, aber normalerweise tendieren die Leute dazu, mehr Details anzugeben.

#### China

China kann bis zu drei Verwaltungsebenen nutzen: die Provinz, die Stadt und den Bezirk.

Die sechsstellige Postleitzahl ist nicht immer erforderlich, wird jedoch bei Bereitstellung separat mit einer Beschriftung zur Klarheit angegeben. Zum Beispiel:

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### Japan

Eine Adresse in Japan wird typischerweise **in einer Zeile geschrieben**, in einer Reihenfolge von den am wenigsten spezifischen zu den spezifischeren Teilen (in **umgekehrter Reihenfolge zu den Vereinigten Staaten**). In einer Adresse gibt es zwei oder drei Verwaltungsebenen. Eine zusätzliche Zeile kann verwendet werden, um Gebäudenamen und Raumnummern anzuzeigen. Die Postleitzahl ist separat. Zum Beispiel:

〒 381-0000
長野県長野市某町 123

"〒" und die folgenden sieben Ziffern zeigen die Postleitzahl an.

`address-level1` wird für Präfekturen oder die Metropole Tokio verwendet; "長野県" (Präfektur Nagano) ist in diesem Fall. `address-level2` wird typischerweise für Städte, Bezirke, Orte und Dörfer verwendet; "長野市" (Stadt Nagano) in diesem Fall. "某町 123" ist `address-line1`, das aus einem Bereichenamen und einer Grundstücksnummer besteht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- das {{htmlelement("input")}} Element
- das {{htmlelement("select")}} Element
- das {{htmlelement("textarea")}} Element
- das {{htmlelement("form")}} Element
- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
