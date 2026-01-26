---
title: Passwörter
slug: Web/Security/Authentication/Passwords
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

Die ursprüngliche Authentifizierungsmethode im Web, und immer noch die gängigste, ist das Passwort.

In diesem Leitfaden werden wir:

- Einen schnellen [Überblick](#überblick) über passwortbasierte Authentifizierung geben
- Die [wichtigsten Angriffe und entsprechende Abwehrmaßnahmen](#angriffe_und_abwehrmaßnahmen) hervorheben
- Eine detaillierte Darstellung der drei Hauptabläufe geben: [Registrierung](#registrierung), [Anmelden](#anmeldung) und [Passwort zurücksetzen](#passwort_zurücksetzen) und zeigen, wie die Verteidigungen integriert werden können.

Abschließend werden wir diskutieren, wie selbst mit den besten Praktiken die [passwortbasierte Authentifizierung als relativ schwache Form der Authentifizierung angesehen werden sollte](#schwächen_der_passwortbasierten_authentifizierung) und, wenn möglich, durch andere Methoden ergänzt oder vollständig ersetzt werden sollte.

## Überblick

Um passwortbasierte Authentifizierung bereitzustellen, implementiert eine Website zwei Hauptablaäufe: _Registrierung_ und _Anmelden_.

Wenn sich der Benutzer registriert:

1. Der Benutzer gibt einen neuen Benutzernamen und ein Passwort ein, beispielsweise indem er sie in ein {{htmlelement("form")}}-Element auf der Website eingibt.
2. Die Webseite sendet den Benutzernamen und das Passwort an einen Server, zum Beispiel durch das Absenden der Formulardaten in einer {{httpmethod("POST")}}-Anfrage.
3. Der Server erstellt einen neuen Eintrag für diesen Benutzer in seiner Datenbank. Der Schlüssel ist der Benutzername und das Passwort wird darunter gespeichert.

![Registrierung mit Passwort.](password-basic-register.svg)

Wenn sich der Benutzer anmeldet:

1. Der Benutzer gibt den Benutzernamen und das Passwort an.
2. Die Webseite sendet den Benutzernamen und das Passwort an den Server.
3. Der Server ruft das gespeicherte Passwort für den Benutzer ab und vergleicht das gespeicherte Passwort mit dem empfangenen.
4. Wenn die Passwörter übereinstimmen, ist der Benutzer angemeldet.

![Anmelden mit Passwort.](password-basic-signin.svg)

## Angriffe und Abwehrmaßnahmen

Anhand dieser Übersicht können wir einige der Möglichkeiten sehen, wie ein Angreifer sich als Benutzer ausgeben kann.

- **Raten**
  - : Ein Angreifer könnte versuchen, viele verschiedene mögliche Passwörter für einen Benutzer auszuprobieren. Angreifer verwenden typischerweise Passwortlisten, die viele der am häufigsten verwendeten Passwörter enthalten.

- **Credential Stuffing**
  - : Ein Angreifer könnte eine Sammlung von Benutzername/Passwort-Paaren aus einer vorherigen Datenpanne auf einer anderen Seite kaufen und sie dann auf der Zielseite ausprobieren, in der Hoffnung, dass ein Benutzer dasselbe Passwort für beide Seiten verwendet hat.

- **Abfangen**
  - : Ein Angreifer könnte den Benutzernamen und das Passwort abfangen, während sie vom Browser zum Server übertragen werden. Eine praktikable Möglichkeit, dies zu tun, besteht darin, kostenlose WLAN-Hotspots in Cafés oder Flughäfen einzurichten und darauf zu warten, dass Opfer sich verbinden und sich dann auf der Zielwebsite anmelden.

- **Datenbankkompromittierung**
  - : Ein Angreifer könnte in den Server einbrechen und die Datenbank mit gespeicherten Einträgen abrufen.

- **Phishing**
  - : Ein Angreifer könnte den Benutzer dazu bringen, sein Passwort an den Angreifer weiterzugeben. Zum Beispiel könnte ein Angreifer eine Seite erstellen, die genauso aussieht wie die Anmeldeseite der Zielseite, und dem Zielbenutzer eine E-Mail mit einem Link zur gefälschten Seite senden, ihn auffordern, sich anzumelden, um den Bestellstatus zu überprüfen oder eine Nachricht zu erhalten.

### Abwehrmaßnahmen

- **Unterstützung von Passwortmanagern**
  - : Ein Passwortmanager ist eine Anwendung, die Benutzern das Speichern von Passwörtern ermöglicht, sodass Benutzer sie sich nicht merken müssen. Passwortmanager können Passwörter in Anmeldeformularen auch automatisch ausfüllen und starke Passwörter für Benutzer generieren. Passwortmanager sind oft als Browsererweiterungen implementiert, und Browser bieten auch eigene integrierte Passwortmanager an.

    Passwortmanager helfen, die Bedrohung durch [Raten](#guessing) und [Credential Stuffing](#credential_stuffing)-Angriffe zu reduzieren, indem sie es Benutzern erheblich erleichtern, starke Passwörter zu verwenden und die Wiederverwendung von Passwörtern zu verringern. Sie helfen auch beim Schutz vor [Phishing](/de/docs/Web/Security/Attacks/Phishing#password_managers), da sie Anmeldedaten in den „ähnlich aussehenden“ Webseiten, die in Phishing-Angriffen verwendet werden, nicht automatisch ausfüllen, und dies hilft dem Benutzer zu realisieren, dass die Seite nicht legitim ist.

    In unseren Richtlinien für die [Registrierungs-](#registrierung) und [Anmeldeflüsse](#anmeldung) erläutern wir, wie sichergestellt werden kann, dass Passwortmanager mit Ihrer Website arbeiten können.

- **Auswahl starker Passwörter**
  - : Um sich gegen [Raten](#guessing) und [Credential Stuffing](#credential_stuffing)-Angriffe zu verteidigen, können Sie bei der Erstellung eines neuen Passworts in den [Registrierungs-](#registrierung) oder [Passwort zurücksetzen](#passwort_zurücksetzen)-Flüsses sicherstellen, dass es nicht schwach ist oder auf Listen bekannter kompromittierter Passwörter erscheint.

- **Sichere Passwortübertragung**
  - : Um Angriffe durch [Abfangen](#interception) zu verhindern, müssen Passwörter immer über {{Glossary("HTTPS", "HTTPS")}} gesendet werden. Dies sollte jedoch keine spezifische Anforderung für die Passwortübertragung sein: Alle Seiten Ihrer Website sollten immer über HTTPS übertragen werden, um [Manipulator-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe zu verringern.

- **Sichere Passwortspeicherung**
  - : Um gegen [Datenbankkompromittierungen](#database_compromise) zu verteidigen, muss der Server Passwörter in einer Form speichern, die es einem Angreifer unmöglich macht, das ursprüngliche Passwort abzurufen, selbst wenn er Zugriff auf die Datenbank des Servers erhält. Wir werden die Anforderungen an dies in unseren Richtlinien für den [Registrierungs-](#registrierung) Ablauf abdecken.

In den nächsten drei Abschnitten werden wir einen detaillierteren Blick auf die Hauptabläufe werfen, die für ein passwortbasiertes Authentifizierungssystem erforderlich sind:

- [Registrierung](#registrierung)
- [Anmeldung](#anmeldung)
- [Passwort zurücksetzen](#passwort_zurücksetzen)

In jedem Abschnitt werden wir Praktiken hervorheben, die helfen, die Bedrohung zu minimieren, die durch die aufgeführten Angriffe entsteht, aber wie wir sehen werden, ist es unmöglich, sie vollständig zu eliminieren.

## Registrierung

Bei der Registrierung gibt ein neuer Benutzer einen neuen Benutzernamen und ein Passwort an. Die Seite wird sehr wahrscheinlich auch nach einer E-Mail-Adresse fragen und kann sich entscheiden, die E-Mail-Adresse als Benutzernamen zu verwenden.

Die Seite sollte nach diesen Informationen mit einem HTML {{htmlelement("form")}} fragen.

### Formulargestaltung

Gut gestaltete Formulare helfen Benutzern, effektiv mit Passwörtern zu arbeiten, und helfen auch Passwortmanagern, sich in eine Website zu integrieren.

Typischerweise wird ein Passwortmanager in einem Registrierungsformular:

- Erkennen, wenn ein Benutzer aufgefordert wird, ein neues Passwort zu erstellen und anbieten, eines zu generieren. Dies hilft, Angriffe durch [Raten](#guessing) und [Credential Stuffing](#credential_stuffing) zu schützen.
- Erkennen, wenn ein Benutzer ein Registrierungsformular absendet und anbieten, den Benutzernamen und das Passwort, die mit der Seite verbunden sind, zu speichern.

Durch die Befolgung der nachstehenden Praktiken können Passwortmanager erkennen, mit welchen Formularen sie interagieren müssen, welche Elemente sie enthalten und an welchen Punkten sie aktiv werden müssen.

- Das `<form>`-Element sollte der Registrierung gewidmet sein.
- Formulare sollten eine klare Anzeige geben, dass das Formular eingereicht wurde. Dies bedeutet entweder das Navigieren zu einer anderen Seite bei der Einreichung oder das Simulieren einer Navigation mit `History.pushState()` oder `History.replaceState()`.
- Einzelne `<input>`-Elemente sollten den richtigen` type` verwenden:
  - `"text"` oder `"email"` für Benutzernamen
  - `"password"` für Passwörter.
- Einzelne `<input>`-Elemente sollten das richtige `autocomplete` Attribut verwenden:
  - `"username"` für Benutzernamen
  - `"new-password"` für die Erstellung eines neuen Passworts in Registrierungs- oder Password-reset-Formularen
  - `"current-password"` für die Eingabe eines bestehenden Passworts in Anmelde- oder Passwortzurücksetzformulare
- Formulare sollten versteckte Felder für Informationen verwenden, die der Benutzer nicht eingeben muss, die aber einen Hinweis für Passwortmanager geben können. Zum Beispiel muss der Benutzer möglicherweise den Benutzernamen in einem Passwortänderungsformular nicht eingeben, aber der Benutzername kann einem Passwortmanager helfen zu wissen, welches Passwort er eingeben soll.

Für weitere Informationen siehe:

- [Sign-In-Formulare Best Practices](https://web.dev/articles/sign-in-form-best-practices#new-password)
- [Passwortmanager dazu bringen, mit Ihrem Anmeldeformular zusammenzuarbeiten](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/)
- [Erstellen Sie erstaunliche Passwortformulare](https://www.chromium.org/developers/design-documents/create-amazing-password-forms/)

Das Registrierungsformular fordert den Benutzer typischerweise auf, das Passwort zweimal einzugeben.

### Formularübermittlung

Wenn der Benutzer das Formular absendet, sendet das Frontend der Website den Benutzernamen, beide Kopien des Passworts und die E-Mail-Adresse an den Server, mit einer HTTP {{httpmethod("POST")}} Anfrage. Dies muss über {{Glossary("HTTPS", "HTTPS")}} erfolgen, um zu verhindern, dass [Angreifer das Passwort während der Übertragung abfangen](#interception).

### Validierung von Benutzernamen und Passwörtern

Wenn der Server die `POST`-Anfrage erhält, validiert er den Benutzernamen und das Passwort. Der Benutzername darf nicht mit einem vorhandenen Benutzernamen übereinstimmen, und die Kopien des Passworts müssen übereinstimmen.

Das Risiko von [Raten](#guessing)-Angriffen kann reduziert werden, wenn Benutzer stärkere Passwörter wählen, und die Richtlinien, die Websites befolgen, können dabei helfen.

Wenn Benutzer neue Passwörter wählen, sollten Websites:

- Eine großzügige maximale Passwortlänge haben (mindestens 64 Zeichen).
- Alle Unicode-Zeichen zulassen.
- Keine bestimmten Zeichentypen erfordern (zum Beispiel keine Mischung aus Groß- und Kleinbuchstaben oder Satzzeichen erfordern). Solche Regeln können viele starke Passwortoptionen ausschließen (zum Beispiel Passphrasen), und Benutzer befolgen solche Regeln typischerweise auf sehr vorhersehbare Weise.

Zusätzlich können Websites:

- Das Risiko von [Raten](#guessing)-Angriffen verringern, indem sie Passwörter ablehnen, die auf allgemein bekannten Passwortlisten stehen.
- Das Risiko von [Credential Stuffing](#credential_stuffing)-Angriffen verringern, indem sie Passwörter ablehnen, die in Datenpannen enthalten sind. Zum Beispiel bietet die [Have I Been Pwned](https://haveibeenpwned.com) Website Listen von Passwörtern, die in Datenpannen gefunden wurden, und stellt sie über eine [API](https://haveibeenpwned.com/API/v3#PwnedPasswords) zur Verfügung.

Beachten Sie jedoch, dass dies weit davon entfernt ist, eine vollständige Verteidigung gegen diese Angriffe zu sein: Beispielsweise können Datenpannen privat bleiben oder erst nach der Passwortwahl auftreten.

Websites sollten auch in Betracht ziehen, ein Passwortstarketool wie [zxcvbn](https://github.com/zxcvbn-ts/zxcvbn) zu verwenden: Beachten Sie, dass dieses spezielle Tool Passwörter auch gegen die Daten von Have I Been Pwned überprüft.

Für weitere Informationen siehe:

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls)
- [NIST Digital Identity Guidelines: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [Passwords Evolved: Authentication Guidance for the Modern Era](https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/)

Der Client kann auch Daten validieren, bevor er sie an den Server sendet, aber dies ist nur als Annehmlichkeit für die Benutzer: Der Server muss die Daten auch validieren.

### Speichern von Passwörtern

Wenn Fehler auftreten, antwortet der Server mit einer Fehlermeldung. Andernfalls speichert der Server das Passwort als Datensatz in seiner Datenbank, der durch den Benutzernamen gekennzeichnet ist.

#### Hashing von Passwörtern

Websites dürfen Passwörter nicht in {{Glossary("plaintext", "Klartext")}} speichern. Stattdessen wird das Passwort beim Registrieren des Benutzers mit einem neuen Passwort (oder wenn es geändert wird) gehasht und der Hash gespeichert. Wenn der Benutzer sein Passwort bei der Anmeldung eingibt, führt die Seite folgende Schritte aus:

- Ruft den Hash aus der Datenbank ab
- Hasht das vom Benutzer bereitgestellte Passwort
- Vergleicht die Hashes.

Ein Hash ist eine _Einwegfunktion_, was bedeutet, dass es nicht möglich ist, den Originaleingang zu einer Hashfunktion aus ihrem Ergebnis abzuleiten.

Dies bedeutet, dass ein Angreifer, wenn er auf die Datenbank zugreift, in der Regel versuchen wird, Passwörter durch das Hashen von Listen häufiger Passwörter zu extrahieren und die Ergebnisse mit den Einträgen in der Datenbank zu vergleichen. Aus diesem Grund sind die für die Passwortspeicherung gewählten Hashfunktionen absichtlich langsam und schwer zu optimieren.

Hashfunktionen, die zum Hashen von Passwörtern entwickelt wurden, ermöglichen es Ihnen typischerweise, den Arbeitsaufwand für das Erstellen des Hashes zu konfigurieren, sodass sie langsamer oder schneller gemacht werden können, je nach den erwarteten Fähigkeiten des Angreifers.

#### Vorgefertigte Hash-Tabellen

Statt Hash-Tabellen selbst zu berechnen, können Angreifer das Passwort, das zu einem Hash gehört, in einer vorberechneten Tabelle (auch bekannt als [Regenbogentabelle](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter ihren Hashes zuordnet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, da das Nachschlagen in der Tabelle eine schnelle Operation ist.

#### Salt und Pfeffer

Um Angriffe zu verhindern, die vorgefertigte Hash-Tabellen verwenden, muss _Salt_ dem Passwort hinzugefügt werden, bevor es gehasht wird. Salt ist ein zufälliger Wert, der für jedes Passwort einzigartig ist. Es muss nicht geheim sein: Salt wird zusammen mit dem gehashten Passwort gespeichert. Es verhindert jedoch, dass ein Angreifer vorgefertigte Hash-Werte verwenden kann, da das Salt bedeutet, dass ein gegebenes Passwort zu einem anderen Wert gehasht wird.

Als zusätzliche Abwehrmaßnahme können Websites auch _pfeffer_ zu der Eingabe der Hashfunktion hinzufügen. Im Gegensatz zu Salt ist Pfeffer:

- Nicht einzigartig: Derselbe Wert wird für alle Passwörter in der Datenbank verwendet.
- Ein Geheimnis: Es darf nicht in der Datenbank selbst gespeichert werden, sondern an einem separaten Ort wie einem Hardware-Sicherheitsmodul (HSM).

#### Hashing-Algorithmen

Websites sollten standardisierte Algorithmen verwenden, um Passwörter zu hashen. Diese Algorithmen unterstützen alle oben diskutierten Funktionen. Der [OWASP-Leitfaden zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#password-hashing-algorithms) empfiehlt, in der Reihenfolge der Präferenz:

1. [Argon2id](https://en.wikipedia.org/wiki/Argon2)
2. [scrypt](https://en.wikipedia.org/wiki/Scrypt)
3. [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
4. [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

#### Verwendung von Web-Frameworks

Funktionen zur Speicherung und Überprüfung von Passwörtern sind schwierig, sicher zu implementieren, daher sollten Sie Funktionen eines renommierten Frameworks verwenden, anstatt zu versuchen, Ihre eigenen zu implementieren. Zum Beispiel verwendet [Django](https://docs.djangoproject.com/en/5.0/topics/auth/passwords/) standardmäßig PBKDF2, ermöglicht Ihnen aber, bei Bedarf einen anderen Algorithmus zu wählen.

### E-Mail-Verifizierung

Wenn die Website beabsichtigt, E-Mail im Passwortzurücksetzablauf zu verwenden, muss der Server auch überprüfen, dass die E-Mail-Adresse zu dem sich registrierenden Benutzer gehört. Dazu generiert der Server typischerweise ein zufälliges Token und setzt es als Parameter zu einer Verifizierungs-URL:

```plain
https://example.org/verify?<random-token>
```

Der Server sendet dann eine E-Mail an die vom Benutzer angegebene Adresse. Die E-Mail bittet den Benutzer, auf einen Link zur Verifizierungs-URL zu klicken. Die Seite kann dann dieses Token extrahieren und verwenden, um den Benutzerdatensatz in der Datenbank zu finden. Sie kann dann die E-Mail-Adresse als verifiziert markieren.

## Anmeldung

Um sich anzumelden, gibt der Benutzer seinen Benutzernamen und sein Passwort in ein der Anmeldung gewidmetes HTML `<form>` ein.

Genau wie das Registrierungsformular sollte das Anmeldeformular so gestaltet sein, dass es mit Passwortmanagern zusammenarbeitet (und getestet wird, um dies zu gewährleisten). Dazu sollte das Formular den zuvor im Abschnitt [Formulargestaltung](#formulargestaltung) beschriebenen Praktiken folgen.

Wenn der Benutzer das Formular absendet, sendet das Frontend der Website den Benutzernamen und das Passwort an den Server, in einer HTTP-`POST`-Anfrage. Auch dies muss über TLS erfolgen, um zu verhindern, dass Angreifer das Passwort während der Übertragung abfangen.

Wenn der Server die `POST`-Anfrage erhält, führt der Server folgende Schritte aus:

- Ruft den Datensatz für den angegebenen Benutzernamen ab.
- Falls ein Eintrag vorhanden ist, vergleicht der Server das angegebene Passwort mit dem Wert im Datensatz.

Wenn der Vergleich erfolgreich ist, meldet der Server den Benutzer an und gibt Erfolg zurück.

Wenn der Datensatz nicht gefunden wurde oder der Vergleich fehlschlägt, muss der Server in beiden Fällen dieselbe Fehlermeldung zurückgeben. Andernfalls können Angreifer feststellen, ob ein Konto existiert, und diese Informationen nutzen, um weitere Angriffe durchzuführen.

## Passwort zurücksetzen

Der Passwortzurücksetzablauf ermöglicht es einem Benutzer, sein Passwort zurückzusetzen, wenn er es vergessen oder verloren hat. Dies ist normalerweise darauf angewiesen, dass der Benutzer seine E-Mail-Adresse beim Registrieren angegeben (und dann verifiziert) hat.

Wenn der Benutzer darum bittet, sein Passwort zurückzusetzen, fragt die Website den Benutzer nach seiner E-Mail-Adresse. Die Website kann den Benutzer an dieser Stelle bitten, ein CAPTCHA zu lösen, um es einem böswilligen Dritten zu erschweren, einem legitimen Benutzer regelmäßig Anfragen zum Zurücksetzen des Passworts zu senden.

Das Backend der Website prüft dann, ob es einen Eintrag für diese E-Mail-Adresse hat. _Ob es einen Eintrag hat oder nicht_, gibt die Seite dem Benutzer dieselbe Nachricht: dass sie eine E-Mail mit weiteren Anweisungen an die angegebene Adresse gesendet hat. Durch die Bereitstellung derselben Nachricht in beiden Fällen wird verhindert, dass ein Angreifer herausfindet, ob eine bestimmte E-Mail-Adresse mit einem Konto verknüpft ist: Diese Informationen könnten bei weiteren Angriffen (wie gezielten [Phishing](/de/docs/Web/Security/Attacks/Phishing) oder _Spearphishing_-Angriffen) verwendet werden.

- Wenn die Website keinen Eintrag hat, sendet sie eine E-Mail an die Adresse und informiert den Adressaten darüber, dass jemand diese Adresse in einem "Passwort zurücksetzen"-Formular eingegeben hat, die Seite jedoch keinen Eintrag für diese E-Mail-Adresse hatte. Dies hilft einem legitimen Kontoinhaber, der mehrere E-Mail-Adressen hat, und die falsche Adresse in dem Passwortzurücksetzformular eingegeben hat.

- Wenn die Website einen Eintrag für diese E-Mail-Adresse hat, führt die Seite folgende Schritte aus:
  - Generiert ein Rücksetzungstoken, welches eine Zufallszahl ist, und speichert das Token zusammen mit dem Eintrag. Das Token erhält einen Ablaufzeitstempel.
  - Setzt den Tokenwert als URL-Parameter zur Rücksetz-URL, etwa: `https://example.org/reset?<reset-token>`.
  - Sendet eine E-Mail an die Adresse, die der Benutzer angab, die den Link enthält und den Benutzer auffordert, darauf zu klicken.

Wenn der Benutzer auf den Link klickt, extrahiert die Rücksetzseite den URL-Parameter und sucht nach einem übereinstimmenden gespeicherten Rücksetzungstoken. Wenn ein Rücksetzungstoken gefunden wird und nicht abgelaufen ist, erlaubt die Website dem Benutzer, ein neues Passwort einzugeben. Dieser Ablauf folgt ähnlichen Regeln zum [Registrierungs](#registrierung)-Formular, um das neue Passwort von einem Passwortmanager erkennen zu lassen.

Abschließend sendet die Website dem Benutzer eine Bestätigung, dass sein Passwort geändert wurde.

Für weitere Informationen siehe:

- [Alles, was Sie je über den Aufbau einer sicheren Passwortzurücksetzfunktion wissen wollten](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)
- [Cheatsheet zum Zurücksetzen von Passwörtern](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)

## Schwächen der passwortbasierten Authentifizierung

Die beschriebenen Praktiken helfen, die Risiken eines passwortbasierten Authentifizierungssystems zu verringern, aber Passwörter bleiben eine inhärent anfällige Authentifizierungsmethode:

- Obwohl Passwortmanager und gute Passwortrichtlinien helfen können, Benutzern starke Passwörter zu wählen und keine Passwörter wiederzuverwenden, können sie weder das eine noch das andere garantieren, wodurch Benutzer anfällig für Credential Stuffing und Ratenangriffe bleiben.

- Auch wenn Benutzer starke Passwörter haben und diese nicht wiederverwenden, sind sie dennoch anfällig für Phishing-Angriffe.

Um diese Schwächen anzugehen, sollten Sie in Betracht ziehen, alternative Methoden zu verwenden, entweder anstelle von Passwörtern oder als {{Glossary("multi-factor_authentication", "zusätzliche Authentifizierungsfaktoren")}}. Zum Beispiel verwenden Websites manchmal Passwörter mit einem [Einmalpasswort](/de/docs/Web/Security/Authentication/OTP) als zweiten Faktor, und einige Websites unterstützen [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), die resistent gegen Phishing-Angriffe sind.
