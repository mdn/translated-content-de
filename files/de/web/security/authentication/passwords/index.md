---
title: Passwörter
slug: Web/Security/Authentication/Passwords
l10n:
  sourceCommit: 545c1267ae9642d850ef539956442c2bb4de280a
---

Die ursprüngliche Authentifizierungsmethode im Web und immer noch die gebräuchlichste, ist das Passwort.

In diesem Leitfaden werden wir:

- Einen kurzen [Überblick](#überblick) über passwortbasierte Authentifizierung geben
- Die [Hauptangriffe und entsprechenden Abwehrmaßnahmen](#angriffe_und_abwehrmaßnahmen) hervorheben, denen Sie begegnen werden
- Einen detaillierteren Bericht über die drei Hauptabläufe: [Registrierung](#registrierung), [Anmeldung](#anmeldung) und [Passwort-Zurücksetzung](#passwort-zurücksetzung) geben, um zu zeigen, wie die Abwehrmaßnahmen integriert werden können.

Abschließend werden wir diskutieren, dass selbst bei besten Praktiken die [passwortbasierte Authentifizierung als relativ schwache Form der Authentifizierung angesehen werden sollte](#schwächen_der_passwortbasierten_authentifizierung) und, wenn möglich, durch andere Methoden ergänzt oder vollständig ersetzt werden sollte.

## Überblick

Um passwortbasierte Authentifizierung bereitzustellen, implementiert eine Website zwei Hauptabläufe: _Registrierung_ und _Anmeldung_.

Wenn der Benutzer sich registriert:

1. Der Benutzer gibt einen neuen Benutzernamen und ein Passwort ein, beispielsweise indem er sie in einem {{htmlelement("form")}}-Element auf der Website eingibt.
2. Die Webseite sendet den Benutzernamen und das Passwort an einen Server, beispielsweise indem sie die Formulardaten in einer {{httpmethod("POST")}}-Anfrage übermittelt.
3. Der Server erstellt einen neuen Eintrag für diesen Benutzer in seiner Datenbank. Der Schlüssel ist der Benutzername und das Passwort wird darunter gespeichert.

![Registrierung mit einem Passwort.](password-basic-register.svg)

Wenn der Benutzer sich anmeldet:

1. Der Benutzer gibt den Benutzernamen und das Passwort ein.
2. Die Webseite sendet den Benutzernamen und das Passwort an den Server.
3. Der Server ruft das gespeicherte Passwort des Benutzers ab und vergleicht das gespeicherte Passwort mit dem gerade empfangenen.
4. Wenn die Passwörter übereinstimmen, wird der Benutzer angemeldet.

![Anmeldung mit einem Passwort.](password-basic-signin.svg)

## Angriffe und Abwehrmaßnahmen

Betrachtet man diesen Überblick, können wir einige der Methoden erkennen, wie ein Angreifer den Benutzer imitieren kann.

- **Raten**
  - : Ein Angreifer könnte viele verschiedene mögliche Passwörter für einen Benutzer ausprobieren. Angreifer verwenden typischerweise Passworlisten, die viele der gebräuchlichsten Passwörter enthalten.

- **Credential Stuffing**
  - : Ein Angreifer könnte eine Sammlung von Benutzername/Passwort-Paaren aus einem vorangegangenen Datenvorfall auf einer anderen Website kaufen und dann auf der Zielwebsite ausprobieren, in der Hoffnung, dass ein Benutzer dasselbe Passwort für beide Websites verwendet hat.

- **Abfangen**
  - : Ein Angreifer könnte den Benutzernamen und das Passwort abfangen, während sie vom Browser zum Server übertragen werden. Eine praktische Möglichkeit, dies zu tun, besteht darin, kostenlose Wi-Fi-Hotspots in Cafés oder Flughäfen einzurichten und darauf zu warten, dass Opfer sich verbinden und sich dann bei der Zielwebsite anmelden.

- **Datenbankkompromittierung**
  - : Ein Angreifer könnte in den Server einbrechen und die Datenbank der gespeicherten Einträge abrufen.

- **Phishing**
  - : Ein Angreifer könnte den Benutzer dazu täuschen, ihm sein Passwort auszuhändigen. Zum Beispiel könnte ein Angreifer eine Seite erstellen, die genau wie die Anmeldeseite der Zielseite aussieht, und dem Zielbenutzer eine E-Mail mit einem Link zur gefälschten Seite senden, in der er gebeten wird, sich anzumelden, um den Bestellstatus zu überprüfen oder eine Nachricht zu erhalten.

### Abwehrmaßnahmen

- **Unterstützen von Passwortmanagern**
  - : Ein Passwortmanager ist eine Anwendung, die es Benutzern ermöglicht, Passwörter zu speichern, damit sie sich diese nicht merken müssen. Passwortmanager können auch Passwörter in Anmeldeformulare automatisch ausfüllen und starke Passwörter für Benutzer generieren. Passwortmanager sind oft als Browsererweiterungen implementiert, und Browser bieten auch ihre eigenen integrierten Passwortmanager an.

    Passwortmanager helfen, die Bedrohung von [Raten](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffen zu verringern, indem sie es Benutzern viel einfacher machen, starke Passwörter zu haben und die Wiederverwendung von Passwörtern zu reduzieren. Sie helfen auch bei der Bekämpfung von [Phishing](/de/docs/Web/Security/Attacks/Phishing#password_managers), da sie Anmeldedaten nicht in den "lookalike"-Webseiten automatisch ausfüllen, die in Phishing-Angriffen verwendet werden, und dies hilft dem Benutzer zu erkennen, dass die Seite nicht legitim ist.

    In unseren Richtlinien für die [Registrierung](#registrierung) und [Anmeldung](#anmeldung) erläutern wir, wie sichergestellt werden kann, dass Passwortmanager mit Ihrer Website arbeiten können.

- **Auswahl starker Passwörter**
  - : Um gegen [Raten](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffe zu verteidigen, können Sie, wenn der Benutzer ein neues Passwort während der [Registrierung](#registrierung) oder [Passwort-Zurücksetzung](#passwort-zurücksetzung) erstellt, prüfen, ob es schwach ist oder auf Listen kompromittierter Passwörter erscheint.

- **Sichere Passwortübertragung**
  - : Um gegen [Abfangen](#interception) Angriffe zu verteidigen, müssen Passwörter immer über {{Glossary("HTTPS", "HTTPS")}} übertragen werden. Dies sollte allerdings keine spezifische Anforderung für die Passwortübertragung sein: alle Seiten Ihrer Website sollten immer über HTTPS übertragen werden, um [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriffe zu mildern.

- **Sichere Passwortspeicherung**
  - : Um gegen [Datenbankkompromittierung](#database_compromise) zu verteidigen, muss der Server Passwörter in einer Form speichern, die es einem Angreifer unpraktisch macht, das ursprüngliche Passwort wiederherzustellen, selbst wenn er Zugang zur Datenbank des Servers erhält. In unseren Richtlinien für den [Registrierungsablauf](#registrierung) werden wir die Anforderungen dafür abdecken.

In den nächsten drei Abschnitten werden wir uns die Hauptabläufe eines passwortbasierten Authentifizierungssystems detaillierter ansehen:

- [Registrierung](#registrierung)
- [Anmeldung](#anmeldung)
- [Passwort-Zurücksetzung](#passwort-zurücksetzung)

In jedem Abschnitt werden wir Praktiken hervorheben, die helfen, die Bedrohung durch die aufgeführten Angriffe zu minimieren, aber, wie wir sehen werden, ist es unmöglich, sie vollständig zu eliminieren.

## Registrierung

Bei der Registrierung gibt ein neuer Benutzer einen neuen Benutzernamen und ein Passwort an. Die Website wird sehr wahrscheinlich auch nach einer E-Mail-Adresse fragen und könnte sich entscheiden, die E-Mail-Adresse als Benutzernamen zu verwenden.

Die Site sollte diese Informationen mit einem HTML-{{htmlelement("form")}} abfragen.

### Formulardesign

Gut gestaltete Formulare helfen Benutzern, Passwörter effektiv zu verwenden, und helfen auch Passwortmanagern, sich in eine Website zu integrieren.

Typischerweise wird ein Passwortmanager in einem Registrierungsformular:

- Erkennen, wenn ein Benutzer aufgefordert wird, ein neues Passwort zu erstellen, und anbieten, eines zu generieren. Dies hilft, sich gegen [Raten](#guessing) und [Credential Stuffing](#credential_stuffing) Angriffe zu schützen.
- Erkennen, wenn ein Benutzer ein Registrierungsformular absendet und anbieten, den Benutzernamen und das Passwort in Verbindung mit der Site zu speichern.

Die Einhaltung der folgenden Praktiken hilft Passwortmanagern, Formulare zu erkennen, mit denen sie interagieren müssen, die darin enthaltenen Elemente zu identifizieren und die Zeitpunkte zu bestimmen, zu denen sie einbezogen werden müssen.

- Das `<form>`-Element sollte ausschließlich für die Registrierung bestimmt sein.
- Formulare sollten eine klare Angabe darüber machen, dass das Formular abgeschickt wurde. Das bedeutet entweder die Navigation zu einer anderen Seite bei der Übermittlung oder das Simulieren einer Navigation mit `History.pushState()` oder `History.replaceState()`.
- Einzelne `<input>`-Elemente sollten den richtigen `type` verwenden:
  - `"text"` oder `"email"` für Benutzernamen
  - `"password"` für Passwörter.
- Einzelne `<input>`-Elemente sollten das richtige `autocomplete` Attribut verwenden:
  - `"username"` für Benutzernamen
  - `"new-password"` für die Erstellung eines neuen Passworts, in Registrierungs- oder Passwort-Zurücksetzungsformularen
  - `"current-password"` für die Eingabe eines bestehenden Passworts, in Anmelde- oder Passwort-Zurücksetzungsformularen
- Formulare sollten versteckte Felder für Informationen verwenden, die der Benutzer nicht eingeben muss, die aber einem Passwortmanager einen Hinweis geben können. Zum Beispiel muss der Benutzer möglicherweise nicht den Benutzernamen in einem Passwortänderungsformular eingeben, aber der Benutzername kann einem Passwortmanager helfen zu wissen, welches Passwort eingegeben werden soll.

Für weitere Informationen:

- [Best Practices für Anmeldeformulare](https://web.dev/articles/sign-in-form-best-practices#new-password)
- [Passwortmanager mit Ihrem Anmeldeformular arbeiten lassen](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/)
- [Erstellen hervorragender Passwortformulare](https://www.chromium.org/developers/design-documents/create-amazing-password-forms/)

Das Registrierungsformular fragt den Benutzer normalerweise, das Passwort zweimal einzugeben.

### Formularübermittlung

Wenn der Benutzer das Formular absendet, sendet das Frontend der Website den Benutzernamen, beide Kopien des Passworts und die E-Mail-Adresse an den Server, unter Verwendung einer HTTP-{{httpmethod("POST")}}-Anfrage. Dies muss über {{Glossary("HTTPS", "HTTPS")}} erfolgen, um zu verhindern, dass Angreifer das Passwort während des Transits [abfangen](#interception).

### Benutzername und Passwortvalidierung

Wenn der Server die `POST`-Anfrage erhält, validiert er den Benutzernamen und das Passwort. Der Benutzername darf nicht mit einem vorhandenen Benutzernamen übereinstimmen, und die Kopien des Passworts müssen miteinander übereinstimmen.

Das Risiko von [Rateangriffen](#guessing) kann reduziert werden, wenn Benutzer stärkere Passwörter auswählen, und die von den Websites gefolgten Richtlinien können dabei helfen.

Wenn Benutzer neue Passwörter wählen, sollten Websites:

- Eine großzügige maximale Passwortlänge erlauben (mindestens 64 Zeichen).
- Beliebige Unicode-Zeichen erlauben.
- Keine spezifischen Zeichentypen einfordern (zum Beispiel keine Mischung aus Groß- und Kleinbuchstaben oder Satzzeichen verlangen). Solche Regeln können viele starke Passwortoptionen ausschließen (zum Beispiel Passphrasen), und Benutzer befolgen solche Regeln typischerweise auf stark vorhersehbare Weise.

Zusätzlich können Websites:

- Das Risiko von [Rateangriffen](#guessing) verringern, indem sie Passwörter ablehnen, die auf gängigen Passworlisten gefunden werden.
- Das Risiko von [Credential Stuffing](#credential_stuffing) Angriffen verringern, indem sie Passwörter ablehnen, die in Datenvorfällen enthalten sind. Zum Beispiel stellt die Website [Have I Been Pwned](https://haveibeenpwned.com) Listen von Passwörtern zur Verfügung, die in Datenverletzungen gefunden wurden, und macht sie über eine [API](https://haveibeenpwned.com/API/v3#PwnedPasswords) verfügbar.

Dies ist jedoch weit davon entfernt, ein vollständiger Schutz gegen diese Angriffe zu sein: Datenverletzungen können zum Beispiel nicht öffentlich gemacht werden oder nach der Auswahl des Passworts auftreten.

Websites sollten auch erwägen, ein Passwort-Stärke-Tool wie [zxcvbn](https://github.com/zxcvbn-ts/zxcvbn) zu verwenden: Beachten Sie, dass dieses bestimmte Tool Passwörter auch gegen die "Have I Been Pwned"-Daten prüft.

Für weitere Informationen, siehe:

- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls)
- [NIST Digital Identity Guidelines: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [Passwörter entwickelt: Authentifizierungsrichtlinien für das moderne Zeitalter](https://www.troyhunt.com/passwords-evolved-authentication-guidance-for-the-modern-era/)

Auch der Client kann Daten validieren, bevor er sie an den Server sendet, aber dies ist nur eine Annehmlichkeit für Benutzer: der Server muss die Daten ebenfalls validieren.

### Speicherung von Passwörtern

Wenn Fehler auftreten, antwortet der Server mit einer Fehlermeldung. Andernfalls speichert der Server das Passwort als Eintrag in seiner Datenbank, der dem Benutzernamen zugeordnet ist.

#### Hashen von Passwörtern

Websites dürfen Passwörter nicht im {{Glossary("plaintext", "Klartext")}} speichern. Stattdessen wird das Passwort bei der Registrierung mit einem neuen Passwort (oder beim Ändern des Passworts) gehasht und der Hash gespeichert. Wenn der Benutzer sein Passwort bei der Anmeldung angibt, führt die Seite Folgendes aus:

- Ruft den Hash aus der Datenbank ab
- Hasht das vom Benutzer bereitgestellte Passwort
- Vergleicht die Hashes.

Ein Hash ist eine _einwegfunktion_, das bedeutet, dass es nicht möglich ist, die ursprüngliche Eingabe zu einer Hashfunktion aus ihrem Ausgangswert abzuleiten.

Das bedeutet, dass wenn ein Angreifer Zugang zur Datenbank erhält, er typischerweise versuchen wird, Passwörter zu extrahieren, indem er Listen von gängigen Passwörtern hasht und die Ergebnisse mit den Einträgen in der Datenbank vergleicht. Aus diesem Grund sind die für die Passwortspeicherung gewählten Hashfunktionen absichtlich langsam und schwer zu optimieren.

Hashfunktionen, die für das Hashen von Passwörtern entwickelt wurden, ermöglichen es Ihnen typischerweise, die auf die Erstellung des Hashes verwendete Arbeit zu konfigurieren, sodass sie je nach den erwarteten Fähigkeiten des Angreifers langsamer oder schneller gemacht werden können.

#### Vorratsberechnete Hashtabellen

Anstatt selbst Hashtabellen zu berechnen, können Angreifer das Passwort, das einem Hash entspricht, in eine vorkalkulierte Tabelle (auch bekannt als [Rainbow-Table](https://en.wikipedia.org/wiki/Rainbow_table)) nachschlagen, die mögliche Passwörter auf ihre Hashwerte abbildet:

| Passwort | Hash        |
| -------- | ----------- |
| pa55w0rd | 56965E2A... |
| abcdef   | BEF57EC7... |
| letmein  | 1C8BFE8F... |

Obwohl diese Tabellen sehr groß sein können, können solche Angriffe effektiv sein, weil Tabellenlookup eine schnelle Operation ist.

#### Salt und Pfeffer

Um Angriffe zu vereiteln, die vorgefertigte Hashtabellen verwenden, muss _Salt_ zum Passwort hinzugefügt werden, bevor es gehasht wird. Salt ist ein zufälliger Wert, der für jedes Passwort einzigartig ist. Es muss nicht geheim sein: Salt wird zusammen mit dem gehashten Passwort gespeichert. Es verhindert jedoch, dass ein Angreifer vorkalkulierte Hashwerte verwendet, weil das Salt bedeutet, dass ein gegebenes Passwort zu einem anderen Wert gehasht wird.

Als zusätzliche Abwehrmaßnahme können Websites auch _Pepper_ zum Input der Hashfunktion hinzufügen. Im Gegensatz zu Salt ist Pepper:

- Nicht einzigartig: derselbe Wert wird für alle Passwörter in der Datenbank verwendet.
- Ein Geheimnis: es darf nicht in der Datenbank selbst, sondern an einem separaten Ort wie einem Hardware-Sicherheitsmodul (HSM) gespeichert werden.

#### Hashing-Algorithmen

Websites sollten standardisierte Algorithmen verwenden, um Passwörter zu hashen. Diese Algorithmen unterstützen alle oben beschriebenen Funktionen. Der [OWASP Leitfaden zur Passwortspeicherung](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#password-hashing-algorithms) empfiehlt in der Reihenfolge der Präferenz:

1. [Argon2id](https://en.wikipedia.org/wiki/Argon2)
2. [scrypt](https://en.wikipedia.org/wiki/Scrypt)
3. [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
4. [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

#### Verwendung von Web-Frameworks

Funktionen für die Passwortspeicherung und -verifikation sind schwer sicher zu implementieren, daher sollten Sie Funktionen verwenden, die von einem renommierten Framework bereitgestellt werden, anstatt zu versuchen, Ihre eigenen zu implementieren. Zum Beispiel verwendet [Django](https://docs.djangoproject.com/en/5.0/topics/auth/passwords/) standardmäßig PBKDF2, ermöglicht Ihnen jedoch, einen anderen Algorithmus zu verwenden, wenn Sie möchten.

### E-Mail-Bestätigung

Wenn die Website plant, E-Mail im Passwort-Zurücksetzungsablauf zu verwenden, muss der Server auch überprüfen, ob die E-Mail-Adresse der sich anmeldenden Person gehört. Dazu generiert der Server typischerweise ein zufälliges Token und setzt es als Parameter zu einer Bestätigungs-URL:

```plain
https://example.org/verify?<random-token>
```

Der Server sendet dann eine E-Mail an die vom Benutzer angegebene Adresse. Die E-Mail fordert den Benutzer auf, einen Link zur Bestätigungs-URL zu klicken. Die Seite kann dieses Token dann extrahieren und es verwenden, um den Benutzerdatensatz in der Datenbank zu finden. Es kann dann die E-Mail-Adresse als verifiziert markieren.

## Anmeldung

Um sich anzumelden, gibt der Benutzer seinen Benutzernamen und sein Passwort mit einem HTML-`<form>` ein, der nur für die Anmeldung verwendet wird.

Genau wie das Registrierungsformular sollte das Anmeldeformular darauf ausgelegt sein, mit Passwortmanagern zu arbeiten (und getestet werden, ob es mit ihnen funktioniert). Um dies zu ermöglichen, sollte das Formular den zuvor im Abschnitt [Formulardesign](#formulardesign) beschriebenen Praktiken folgen.

Wenn der Benutzer das Formular absendet, sendet das Frontend der Website den Benutzernamen und das Passwort an den Server, unter Verwendung einer HTTP-`POST`-Anfrage. Auch hier muss dies über TLS erfolgen, um zu verhindern, dass Angreifer das Passwort während des Transits abfangen.

Wenn der Server die `POST`-Anfrage erhält, führt der Server Folgendes aus:

- Ruft den Eintrag für den angegebenen Benutzernamen ab.
- Wenn ein Eintrag vorhanden ist, vergleicht er das angegebene Passwort mit dem Wert im Eintrag.

Wenn der Vergleich erfolgreich ist, meldet der Server den Benutzer an und gibt Erfolg zurück.

Wenn der Eintrag nicht gefunden wurde oder der Vergleich fehlschlägt, muss der Server dieselbe Fehlermeldung in beiden Fällen zurückgeben. Andernfalls können Angreifer feststellen, ob ein Konto existiert, und diese Informationen für weitere Angriffe verwenden.

## Passwort-Zurücksetzung

Der Passwort-Zurücksetzungsablauf ermöglicht es einem Benutzer, das Passwort zurückzusetzen, wenn er es vergessen oder verloren hat. Dies hängt normalerweise davon ab, dass der Benutzer (und dann verifiziert) seine E-Mail-Adresse bei der Registrierung angegeben hat.

Wenn der Benutzer darum bittet, das Passwort zurückzusetzen, fordert die Website den Benutzer auf, seine E-Mail-Adresse einzugeben. Die Website kann den Benutzer an diesem Punkt bitten, ein CAPTCHA zu lösen, um es einem böswilligen Dritten zu erschweren, einem legitimen Benutzer mehrere Passwort-Zurücksetzungsanforderungen zu senden.

Das Backend der Website überprüft dann, ob es einen Eintrag für diese E-Mail-Adresse hat. _Ganz gleich, ob es einen Eintrag hat oder nicht_, gibt die Website dem Benutzer dieselbe Nachricht: dass sie eine E-Mail an die angegebene Adresse mit weiteren Anweisungen gesendet hat. Durch das Bereitstellen derselben Nachricht in beiden Fällen wird verhindert, dass ein Angreifer herausfindet, ob eine bestimmte E-Mail-Adresse mit einem Konto verknüpft ist: diese Informationen könnten für weitere Angriffe (wie gezielte [Phishing](/de/docs/Web/Security/Attacks/Phishing)- oder _Spearphishing_-Angriffe) verwendet werden.

- Wenn die Website keinen Eintrag hat, sendet sie eine E-Mail an die Adresse und informiert den Adressaten darüber, dass jemand diese E-Mail in einem "Passwort zurücksetzen"-Formular eingegeben hat, die Website jedoch keinen Eintrag zu dieser E-Mail-Adresse hatte. Dies hilft einem legitimen Kontoinhaber, der mehrere E-Mail-Adressen hat und die falsche Adresse in das Passwort-Zurücksetzungsformular eingegeben hat.

- Wenn die Website einen Eintrag für diese E-Mail hat, führt sie Folgendes aus:
  - Generiert ein Zurücksetzungstoken, das eine Zufallszahl ist, und speichert das Token zusammen mit dem Eintrag. Dem Token wird ein Ablaufzeitstempel zugewiesen.
  - Setzt den Tokenwert als URL-Parameter zur Zurücksetzungs-URL, wie: `https://example.org/reset?<reset-token>`.
  - Sendet eine E-Mail an die vom Benutzer angegebene Adresse, die den Link enthält und den Benutzer bittet, ihn zu klicken.

Wenn der Benutzer auf den Link klickt, extrahiert die Reset-Seite den URL-Parameter und sucht nach einem passenden gespeicherten Zurücksetzungstoken. Wenn ein Zurücksetzungstoken gefunden wird und nicht abgelaufen ist, erlaubt die Website dem Benutzer, ein neues Passwort einzugeben. Dieser Ablauf folgt ähnlichen Regeln wie das [Registrierungsformular](#registrierung), um sicherzustellen, dass das neue Passwort von einem Passwortmanager erkannt werden kann.

Abschließend sendet die Website dem Benutzer eine Bestätigung, dass sein Passwort geändert wurde.

Für weitere Informationen, siehe:

- [Alles, was Sie je über den Aufbau einer sicheren Passwort-Zurücksetzungsfunktion wissen wollten](https://www.troyhunt.com/everything-you-ever-wanted-to-know/)
- [Passwort vergessen - Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)

## Schwächen der passwortbasierten Authentifizierung

Die oben beschriebenen Praktiken helfen, die Risiken eines passwortbasierten Authentifizierungssystems zu verringern, aber Passwörter bleiben eine von Natur aus anfällige Authentifizierungsmethode:

- Obwohl Passwortmanager und gute Passwortrichtlinien Benutzern helfen können, starke Passwörter zu wählen und Passwörter nicht wiederzuverwenden, können sie keines von beidem garantieren und lassen Benutzer anfällig für [Credential Stuffing](#credential_stuffing) und [Rateangriffe](#guessing) Angriffe.

- Selbst wenn Benutzer starke Passwörter haben und sie nicht wiederverwenden, bleiben sie dennoch anfällig für [Phishing](#phishing) Angriffe.

Um diese Schwächen anzugehen, ziehen Sie in Betracht, alternative Methoden zu verwenden, entweder anstelle von Passwörtern oder als {{Glossary("multi-factor_authentication", "zusätzliche Authentifizierungsfaktoren")}}. Zum Beispiel verwenden Websites manchmal Passwörter mit einem [Einmalpasswort](/de/docs/Web/Security/Authentication/OTP) als zweiten Faktor, und einige Websites unterstützen [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), die gegen Phishing-Angriffe resistent sind.
