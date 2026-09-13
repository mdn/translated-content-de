---
title: Betriebssicherheit
slug: Web/Security/Defenses/Operational_security
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

In diesem Leitfaden behandeln wir Sicherheitspraktiken, die nicht unmittelbar mit dem Code zusammenhängen, den Sie schreiben, sondern damit, wie Sie Ihr Projekt entwickeln, erstellen, bereitstellen und aktualisieren.

Viele davon sind Schutzmaßnahmen gegen [Angriffe auf die Lieferkette](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei denen Angreifer die Prozesse unterwandern, die Sie zur Entwicklung Ihrer Websites befolgen, um bösartigen oder verwundbaren Code in diese einzuschleusen. Schutzmaßnahmen gegen Angriffe auf die Lieferkette zielen in der Regel darauf ab, Ihren Entwicklungsprozess abzusichern.

Wir haben diesen Leitfaden in die folgenden Abschnitte unterteilt:

- Absichern Ihrer Entwicklungsumgebung: Dies umfasst Praktiken für die Entwicklung und Aktualisierung Ihres eigenen Codes.

- Verwalten von Abhängigkeiten: Fast alle Softwareprojekte hängen von Paketen ab, die von Dritten geschrieben wurden. In diesem Abschnitt werden Praktiken aufgeführt, die das Risiko verringern, das mit dieser Entscheidung verbunden ist.

- Überwachung und Reaktion: In diesem Abschnitt werden Praktiken aufgeführt, die Ihnen helfen, Sicherheitsprobleme in Ihrem Projekt zu erkennen und darauf zu reagieren.

- Erstellen sicherer Backups.

## Absichern Ihrer Entwicklungsumgebung

In diesem Abschnitt beschreiben wir Schritte, die Sie unternehmen können, um zu verhindern, dass Angreifer den Code Ihres Projekts kompromittieren.

### Starke Authentifizierung für Projekt-Maintainer verlangen

Indem ein Angreifer die Kontrolle über das Konto eines Maintainers erlangt, kann er bösartigen Code einschleusen oder ein bösartiges Update seines Produkts bereitstellen.

Das bedeutet, dass ein Projekt für Maintainer-Konten eine starke Authentifizierungsmethode verwenden muss.

- Verwenden Sie nach Möglichkeit [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), um Maintainer zu authentifizieren.

- Falls dies nicht möglich ist, verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}}, indem Sie Passwörter mit [zeitbasierten Einmalpasswörtern (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) kombinieren.

Beachten Sie, dass Angreifer häufig [Phishing](/de/docs/Web/Security/Attacks/Phishing) einsetzen, um die Kontrolle über Maintainer-Konten zu erlangen. Obwohl MFA Phishing erschwert, [verhindern die meisten Formen von MFA dies nicht](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication). Passkeys bieten den stärksten Schutz gegen Phishing-Angriffe.

### Rollenbasierte Zugriffskontrolle für Projekt-Maintainer implementieren

Projekte sollten Maintainern nur die Berechtigungen gewähren, die sie für ihre Arbeit benötigen. Beispielsweise könnten Sie nur einer Teilmenge von Maintainern erlauben, die Sicherheitseinstellungen des Projekts zu ändern oder neue Releases zu erstellen. Dies begrenzt den Schaden, den ein Angreifer anrichten kann, wenn er das Konto eines Maintainers kompromittiert.

### Die verwendeten Tools bewerten

Neben [direkten Abhängigkeiten von Drittanbietern](#abhängigkeiten_von_drittanbietern_verwalten) verwenden Projekte im Prozess der Entwicklung, des Testens und der Bereitstellung von Software in der Regel eine Reihe von Tools von Drittanbietern. Dazu gehören beispielsweise:

- Texteditoren und IDEs
- Editor-Plugins
- Quellcodeverwaltungssysteme
- Alle Tools, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Wenn ein Angreifer diese Tools kompromittieren kann, kann er möglicherweise auch Ihr Produkt kompromittieren. Sie können das Risiko verringern, indem Sie Tools bewerten, bevor Sie sich für deren Verwendung entscheiden. Für Open-Source-Softwareabhängigkeiten können Sie den von der [OpenSSF](https://openssf.org/) veröffentlichten [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) als Leitfaden verwenden.

### Ihre Konfiguration absichern

Verstehen und verwenden Sie sichere Einstellungen für Ihre Tools, insbesondere für Ihr Quellcodeverwaltungssystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull Requests (PRs) überprüft und ausdrücklich von einem Code Owner genehmigt werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs Prüfungen der {{Glossary("continuous_integration", "kontinuierlichen Integration")}} bestehen, bevor sie zusammengeführt werden können.
- Verlangen, dass Commits signiert werden.

Siehe die [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab enthalten.

### Geheimnisse sicher handhaben

Projekt-Maintainer müssen in der Regel Anmeldedaten wie Passwörter oder API-Schlüssel verwenden, die geheim gehalten werden müssen. Projekte sollten sicherstellen, dass diese ordnungsgemäß behandelt werden:

- Geheimnisse sollten sicher gespeichert werden.
- Der Zugriff auf Geheimnisse sollte kontrolliert und auf die Maintainer beschränkt werden, die sie benötigen.
- Geheimnisse sollten niemals in öffentliche Repositories eingecheckt werden. Tools zum Scannen von Repositories nach Geheimnissen sind verfügbar, entweder als Teil von Quellcodeverwaltungs- oder Hosting-Systemen oder als Dienste von Drittanbietern.

## Abhängigkeiten von Drittanbietern verwalten

Abhängigkeiten von Drittanbietern umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Tools von Drittanbietern, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Quellcodeverwaltungssystemen, Paketmanagern und Build-Tools.

Um Probleme mit Abhängigkeiten von Drittanbietern zu mindern, behandeln wir die folgenden Praktiken:

1. Neue Abhängigkeiten bewerten
2. Bestehende Abhängigkeiten aktualisieren
3. Eine _Software Bill of Materials_ (SBOM) pflegen

### Neue Abhängigkeiten bewerten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, wie groß das von ihr ausgehende Sicherheitsrisiko ist. Sie müssen darauf vertrauen können, dass die Abhängigkeit aktiv gepflegt wird, dass Probleme nachweislich behoben werden und dass es einen Prozess zum Melden und Beheben von Sicherheitslücken gibt.

Sie sollten abwägen, ob das Risiko des Hinzufügens der Abhängigkeit die Kosten überwiegt, die Funktion selbst zu implementieren.

Der von der [OpenSSF](https://openssf.org/) veröffentlichte [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Abhängigkeiten aktualisieren

Nachdem Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, veröffentlicht deren Anbieter in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitskorrekturen. Normalerweise möchten Sie diese Updates nutzen, indem Sie einen Mechanismus implementieren, der die Abhängigkeit aktuell hält. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull Requests zum Aktualisieren Ihres Projekts öffnen.

Das zu eifrige Aktualisieren von Abhängigkeiten bringt jedoch eigene Risiken mit sich. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Paket eines Drittanbieters hinzu. Ein Angreifer erlangt dann die Kontrolle über das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Eine Lockfile verwenden

Der erste Schritt zur Absicherung von Abhängigkeitsupdates besteht darin, eine _Lockfile_ für Abhängigkeiten zu verwenden, sie in die Quellcodeverwaltung einzuchecken und sie beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Anschließend können Sie einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die exakte Version jedes Pakets: Wenn der Paketanbieter eine neue Version veröffentlicht, kann diese beim Erstellen Ihres Projekts automatisch einbezogen werden. Falls die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie davon überhaupt wissen.

Angenommen, Ihre package.json enthält eine Abhängigkeit namens „example-dependency“:

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Build-Prozess Ihres Projekts wird automatisch ausgeführt, wenn Ihre Anbieter neue Versionen veröffentlichen. Der Build-Prozess startet den Build durch den Aufruf von `npm install`. Dadurch wird die neueste Version von „example-dependency“ abgerufen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

In Version `1.0.2`, also zu dem Zeitpunkt, als Sie das Paket dem Projekt hinzugefügt haben, ist „example-dependency“ ein nützliches, unbedenkliches Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von „example-dependency“ und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess wird ausgeführt, installiert das bösartige Paket und Ihr Projekt wird kompromittiert.

All dies ist geschehen, ohne dass sich direkte Artefakte Ihres Projekts geändert haben oder Sie die Möglichkeit hatten, das Update zu überprüfen und festzustellen, ob es verdächtig wirkt.

Die Lösung hierfür besteht darin, beim Erstellen Ihres Projekts eine Lockfile zu verwenden. Eine Lockfile wird automatisch generiert, sobald die Abhängigkeiten eines Projekts installiert werden, und listet die exakten Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden. Wenn die Lockfile vorhanden ist, können Sie keine anderen Versionen der Abhängigkeiten als die darin aufgeführten installieren.

Das heißt: Wenn _package.json_ Ihnen mitteilt, dass Ihr Projekt „example-dependency“ verwendet, dann teilt _package.lock_ Ihnen genau mit, welche Version von „example-dependency“ verwendet werden soll und welche Versionen seine Abhängigkeiten haben.

Die Lockfile Ihres Projekts sollte in die Quellcodeverwaltung eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Lockfile verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: Bei npm geschieht dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als „Version Pinning“ bezeichnet.

Das bedeutet, dass Ihr Build-System zum Aktualisieren von Abhängigkeiten einen Pull Request zum Aktualisieren der Lockfile erstellen muss. Dadurch erhalten Sie die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Updates überprüfen

Wenn Sie ein Update einer Abhängigkeit überprüfen, sollten Sie überlegen, ob Sie es akzeptieren möchten:

- Lesen Sie das Changelog für das Release, um zu verstehen, was es nach eigener Aussage bietet – und ob Sie es zu diesem Zeitpunkt überhaupt akzeptieren müssen.
- Prüfen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Überprüfen Sie nach Möglichkeit die Aktualisierungen des Quellcodes und stellen Sie fest, ob eine davon nicht erklärbar ist oder nicht mit dem Changelog übereinstimmt.
- Erwägen Sie, vor dem Update etwas zu warten: Angriffe auf die Lieferkette werden häufig schnell von Sicherheitsforschern entdeckt. Für Sie ist es besser, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Eine Software Bill of Materials pflegen

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar von ihnen pflegen. Dies wird als _Software Bill of Materials_ (SBOM) bezeichnet.

Eine Lockfile ist tatsächlich eine Art SBOM: Der Begriff „SBOM“ bezieht sich jedoch gewöhnlich auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl umfassender als auch detaillierter als eine Lockfile. Das heißt:

- Sie können Abhängigkeiten wie Webdienste erfassen, die nicht in einer Lockfile dargestellt werden.
- Sie können zusätzliche Informationen zu jeder Abhängigkeit erfassen, die nicht in einer Lockfile dargestellt werden.

Die Verwendung eines Standardformats zur Darstellung einer SBOM bedeutet außerdem, dass Sie:

- Ihre SBOM mit Dritten teilen können.
- Tools integrieren können, die Ihre SBOM für Zwecke wie regulatorische Compliance oder die Überwachung von Sicherheitslücken verstehen.

Die beiden häufigsten Standards zur Darstellung einer Software Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich von [OWASP](https://owasp.org/) entwickelt.
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards werden gut unterstützt, und Sie können jeden von ihnen verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX konzentrierte sich anfangs darauf, Produkten bei der Sicherstellung der Einhaltung von Open-Source-Softwarelizenzen zu helfen, hat jedoch Funktionen zur Unterstützung von Sicherheitsanwendungsfällen hinzugefügt. CycloneDX ist ein neuerer und schlankerer Standard, der von Anfang an auf die Förderung der Sicherheit der Lieferkette ausgerichtet war.

#### Aufbau einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Vollständige Details finden Sie im CycloneDX-[Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _components_ oder _services_.

- Components umfassen unter anderem Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Services stellen externe APIs dar, die Software beispielsweise über Endpoint-URIs aufrufen kann.

Jede direkt oder indirekt im Produkt verwendete Komponente und jeder Service wird durch ein Objekt in der SBOM dargestellt. Das Objekt enthält Informationen über das Element, darunter Name, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Components) und Endpoint-URIs (für Services).

Die SBOM listet außerdem Sicherheitslücken auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Sicherheitslücke, darunter eine Beschreibung, eine Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Gegenmaßnahmen, Links zu Sicherheitshinweisen und die Kennungen der Components oder Services, die von der Sicherheitslücke betroffen sind.

#### Eine SBOM erstellen

Sie können eine SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Eine SBOM wird in der Regel als Teil des Build-Prozesses generiert, obwohl es möglich ist, sie in anderen Phasen des Softwarelebenszyklus zu generieren.

#### Eine SBOM verwenden

Eine SBOM ermöglicht Ihnen die Implementierung mehrerer Schutzmaßnahmen gegen Angriffe auf die Lieferkette; die drei wichtigsten sind:

- **Verwaltung von Sicherheitslücken**: Eine der wichtigsten Verwendungen einer SBOM besteht darin, auf Sicherheitslücken zu reagieren, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Tools von Drittanbietern wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Sicherheitslückenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Integritätsprüfung**: Falls die SBOM Hashes für Abhängigkeiten enthält, kann überprüft werden, dass die Quelle einer Abhängigkeit gegenüber ihrer ursprünglich veröffentlichten Form nicht verändert wurde.
- **Risikomanagement für Anbieter**: Durch die Erfassung von Informationen über den Anbieter Ihrer Abhängigkeiten kann eine SBOM Ihnen helfen zu verstehen, wann Sie von Components oder Services von Anbietern abhängig sind, die nicht mehr als zuverlässig gelten.

## Überwachung und Reaktion

Sobald eine Website bereitgestellt ist, können Sie Angriffe besser erkennen und darauf reagieren, indem Sie relevante Ereignisse protokollieren und Projekt-Maintainer benachrichtigen, wenn potenziell verdächtige Aktivitäten erkannt werden.

Sie müssen ein Gleichgewicht finden, bei dem Maintainer über tatsächliche Probleme benachrichtigt werden, aber nicht ständig durch Fehlalarme alarmiert werden. Die spezifischen Ereignisse, die protokolliert werden sollten, und die Teilmenge der Ereignisse, die Alarme auslösen sollten, hängen vom Projekt und seinem [Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling) ab, umfassen jedoch häufig:

- Fehler bei der Eingabevalidierung: Fälle, in denen Benutzereingaben nicht dem entsprechen, was Ihre Website erwartet. Eingabetypen umfassen Formulareingaben, URL-Parameter oder Datei-Uploads. Validierungsfehler umfassen Eingaben mit unerwarteten Werten, Formaten, Längen oder Parameternamen. Benutzereingaben, die nicht manuell eingegeben worden sein können, wie eine nicht vorhandene {{htmlelement("select")}}-Option, sind besonders verdächtig.

- Ereignisse im Zusammenhang mit Authentifizierung:
  - Fehlgeschlagene Anmeldeversuche, insbesondere wiederholte Fehlschläge innerhalb kurzer Zeit.
  - Anmeldungen von unerwarteten Standorten oder Geräten.
  - Ereignisse der Anmeldedatenverwaltung: Ändern, Erstellen oder Löschen von Anmeldedaten.
  - Auslösen sekundärer Abläufe wie Abläufe für vergessene Passwörter.

- Fehler bei der Zugriffskontrolle: Versuche, ohne die richtige Berechtigungsstufe auf Ressourcen zuzugreifen.

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verstöße, die mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden können.

Sie sollten außerdem eine Möglichkeit für Benutzer bereitstellen, Sicherheitsprobleme mit Ihrer Website zu melden. Projekte können ihre Sicherheitsrichtlinie mithilfe einer Datei `SECURITY.md` im Stammverzeichnis ihres Repositorys kommunizieren. Diese Datei erklärt, wie Benutzer oder Forscher Sicherheitslücken melden können, wie Sie diese Meldungen behandeln und enthält Details zu Ihrem Bug-Bounty-Programm, falls Sie eines haben.

Websites können Endbenutzern auch eine Möglichkeit bieten, Sicherheitsprobleme zu melden, beispielsweise über eine dedizierte E-Mail-Adresse.

## Backups erstellen

Regelmäßige Backups Ihrer Website und insbesondere Ihrer Daten bieten Schutz vor einer Reihe von Problemen, einschließlich, aber nicht beschränkt auf aktive Angriffe:

- Fehler von Maintainern oder fehlerhafte Tools, die zu Datenverlust oder Datenbeschädigung führen.
- Vandalismus durch einen Angreifer mit Schreibzugriff.
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware)-Angriffe, bei denen ein Angreifer die Daten des Opfers unzugänglich macht – beispielsweise durch Verschlüsselung –, sofern das Opfer kein Lösegeld zahlt, um wieder darauf zugreifen zu können.

Sie sollten auch die Vertraulichkeit und Integrität von Backups schützen: Stellen Sie also sicher, dass Angreifer nicht auf darin enthaltene sensible Daten zugreifen oder diese verändern können.

## Siehe auch

- [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) (OWASP)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) – Ein zentraler Hub für Sicherheitsleitlinien und Ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM and Supply Chain Security Challenges](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) – Empfehlungen für JavaScript-SBOM und Softwareattestierung
  - [Security Compliance Guidelines](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) – Eine umfassende Checkliste für Betriebssicherheit
  - [npm Security Best Practices Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) – Best Practices zum Absichern von npm-Paketen und Abhängigkeiten
  - [Secure Releases Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) – Leitlinien zum Erstellen sicherer Software-Releases
