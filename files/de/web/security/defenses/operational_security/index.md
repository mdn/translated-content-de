---
title: Betriebssicherheit
slug: Web/Security/Defenses/Operational_security
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

In diesem Leitfaden behandeln wir Sicherheitspraktiken, die nicht direkt mit dem von Ihnen geschriebenen Code zusammenhängen, sondern sich damit beschäftigen, wie Sie Ihr Projekt entwickeln, bauen, ausliefern und aktualisieren.

Viele davon sind Abwehrmaßnahmen gegen [Supply-Chain-Angriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei denen der Angreifer die Prozesse, die Sie zur Entwicklung Ihrer Websites befolgen, untergräbt, um bösartigen oder anfälligen Code einzuschleusen. Abwehrmaßnahmen gegen Supply-Chain-Angriffe zielen in der Regel darauf ab, Ihren Entwicklungsprozess zu sichern.

Wir haben diesen Leitfaden in die folgenden Abschnitte unterteilt:

- Sicherung Ihrer Entwicklungsumgebung: Dies umfasst Praktiken in Bezug auf die Art und Weise, wie Sie Ihren eigenen Code entwickeln und aktualisieren.

- Verwaltung von Abhängigkeiten: Fast alle Softwareprojekte hängen von Paketen ab, die von Dritten geschrieben wurden. Dieser Abschnitt listet Praktiken auf, die das Risiko verringern, wenn Sie sich dafür entscheiden.

- Überwachung und Reaktion: Dieser Abschnitt listet Praktiken auf, die Ihnen helfen, Sicherheitsprobleme in Ihrem Projekt zu entdecken und darauf zu reagieren.

- Sicheres Erstellen von Backups.

## Sicherung Ihrer Entwicklungsumgebung

In diesem Abschnitt beschreiben wir Schritte, die Sie unternehmen können, um zu verhindern, dass Angreifer den Code Ihres Projekts kompromittieren.

### Starke Authentifizierung für Projektbetreuer erfordern

Indem ein Angreifer die Kontrolle über das Konto eines Betreuers erlangt, kann er bösartigen Code einschleusen oder ein bösartiges Update seines Produkts ausliefern.

Dies bedeutet, dass ein Projekt eine starke Authentifizierungsmethode für Betreuerkonten verwenden muss.

- Verwenden Sie, wenn möglich, [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), um Betreuer zu authentifizieren.

- Falls dies nicht möglich ist, verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}}, indem Sie Passwörter mit [zeitbasierten Einmal-Passwörtern (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) kombinieren.

Beachten Sie, dass Angreifer häufig [Phishing](/de/docs/Web/Security/Attacks/Phishing) verwenden, um die Kontrolle über Betreuerkonten zu erlangen. Während MFA Phishing erschwert, [verhindern die meisten Formen von MFA dies nicht](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication). Passkeys bieten die stärkste Abwehr gegen Phishing-Angriffe.

### Implementierung von rollenbasierter Zugriffskontrolle für Projektbetreuer

Projekte sollten Betreuern nur die Privilegien gewähren, die sie für ihre Arbeit benötigen. Beispielsweise könnte man nur einem Teil der Betreuer erlauben, die Sicherheitseinstellungen des Projekts zu ändern oder neue Releases zu erstellen. Dies begrenzt den Schaden, den ein Angreifer anrichten kann, wenn er das Konto eines Betreuers kompromittiert.

### Evaluierung der verwendeten Werkzeuge

Abgesehen von [direkten Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten) verwenden Projekte in der Regel eine Reihe von Drittanbieter-Werkzeugen im Prozess der Entwicklung, des Testens und der Auslieferung von Software. Dazu gehören zum Beispiel:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Werkzeuge, die in Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Wenn ein Angreifer diese Werkzeuge kompromittieren kann, kann er potenziell Ihr Produkt gefährden. Sie können das Risiko hier reduzieren, indem Sie Werkzeuge bewerten, bevor Sie sich für deren Verwendung entscheiden. Für Open-Source-Software-Abhängigkeiten können Sie den [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull Requests (PRs) einer Überprüfung und expliziten Genehmigung durch einen Code-Eigentümer bedürfen, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}} Checks bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe die [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab enthalten.

### Sichere Handhabung von Geheimnissen

Projektbetreuer müssen in der Regel Anmeldedaten wie Passwörter oder API-Schlüssel verwenden, die geheim gehalten werden müssen. Projekte sollten sicherstellen, dass diese ordnungsgemäß gehandhabt werden:

- Geheimnisse sollten sicher gespeichert werden.
- Der Zugang zu Geheimnissen sollte kontrolliert und auf die Betreuer beschränkt werden, die sie benötigen.
- Geheimnisse sollten niemals in öffentliche Repositories eingecheckt werden. Werkzeuge zum Scannen von Repositories auf Geheimnisse sind verfügbar, entweder als Teil von Versionskontroll- oder Hosting-Systemen oder als Dienstleistungen von Drittanbietern.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Werkzeuge, die im Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Buildwerkzeuge.

Um Probleme mit Drittanbieter-Abhängigkeiten zu entschärfen, besprechen wir die folgenden Praktiken:

1. Evaluierung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Wartung eines _Software Bill of Materials_ (SBOM)

### Evaluierung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, wie hoch das Sicherheitsrisiko ist, das sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gewartet wird, über eine Historie zur Behebung von Problemen verfügt und ein Verfahren zur Meldung und Reaktion auf Sicherheitslücken hat.

Sie sollten abwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten für die Implementierung der Funktion selbst überwiegt.

Der [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Bugfixes und Sicherheitskorrekturen herausgeben. Sie werden normalerweise diese Updates nutzen wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Werkzeuge wie GitHubs [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull Requests zur Aktualisierung Ihres Projekts öffnen.

Allerdings birgt das zu eilige Aktualisieren von Abhängigkeiten eigene Risiken. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer übernimmt dann das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort annehmen, ist Ihr Projekt kompromittiert.

#### Verwenden eines Lockfiles

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen ist die Verwendung eines _Lockfiles_ für Abhängigkeiten, es in die Versionskontrolle zu übernehmen und es beim Bauen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version herausbringt, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Ist die neue Version der Abhängigkeit bösartig, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es bewusst wahrnehmen.

Beispielsweise angenommen, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Build-Prozess Ihres Projekts läuft automatisch, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build, indem er `npm install` aufruft. Dies holt die neueste Version von "example-dependency", innerhalb des Versionsbereichs `"^1.0.2"`.

Bei Version `1.0.2`, der Punkt, an dem Sie es Ihrem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, gutartiges Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist geschehen, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden oder dass Ihnen die Möglichkeit gegeben wurde, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür ist die Verwendung eines Lockfiles beim Bauen Ihres Projekts. Ein Lockfile wird automatisch erstellt, wann immer die Abhängigkeiten eines Projekts installiert werden, und es listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden. Mit dem Lockfile können keine anderen Versionen der Abhängigkeiten installiert werden als die in ihm aufgeführten.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" verwendet werden soll und welche Versionen seiner Abhängigkeiten gelten.

Das Lockfile Ihres Projekts sollte in die Versionskontrolle übernommen werden. Beim Bauen Ihres Projekts sollten Sie das Lockfile verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Dies bedeutet, dass Ihr Build-System, um Abhängigkeiten zu aktualisieren, einen Pull-Request machen muss, um das Lockfile zu aktualisieren, und Ihnen so die Möglichkeit gibt, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Bei der Überprüfung eines Updates einer Abhängigkeit sollten Sie überlegen, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für das Release, um zu verstehen, was es angeblich bietet (und ob Sie es überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Sehen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie nach, ob einige davon unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Überlegen Sie, ob Sie ein wenig warten, bevor Sie ein Update durchführen: Oft werden Supply-Chain-Angriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Wartung eines Software Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu gewinnen, können Sie eine detaillierte Bestandsaufnahme von ihnen führen. Dies nennt man ein _Software Bill of Materials_ (SBOM).

Ein Lockfile ist eigentlich eine Art SBOM: Der Begriff "SBOM" bezieht sich jedoch in der Regel auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als ein Lockfile. Das heißt:

- Sie können Abhängigkeiten wie Webdienste erfassen, die in einem Lockfile nicht dargestellt werden.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die in einem Lockfile nicht dargestellt werden.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Werkzeuge integrieren können, die Ihr SBOM verstehen können, beispielsweise für regulatorische Compliance oder Schwachstellenüberwachung.

Die beiden häufigsten Standards zur Darstellung eines Software Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können beide verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkten zu helfen, Compliance mit Open-Source-Software-Lizenzen sicherzustellen, hat jedoch Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an auf die Förderung der Supply-Chain-Sicherheit ausgerichtet ist.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des Objektmodells von CycloneDX. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software möglicherweise aufruft, zum Beispiel über Endpunkt-URIs.

Jede in dem Produkt verwendete Komponente und jeder Dienst, direkt oder indirekt, wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jeder Eintrag in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, eines Satzes von [CWE](https://cwe.mitre.org/index.html) Codes, Minderung, Links zu Empfehlungen und den Bezeichnern für die Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellen eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Ein SBOM wird normalerweise als Teil des Build-Prozesses erstellt, obwohl es möglich ist, eines in anderen Phasen des Softwarelebenszyklus zu erstellen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Abwehrmaßnahmen gegen Supply-Chain-Angriffe zu implementieren; die drei wichtigsten sind wie folgt:

- **Schwachstellenmanagement**: Eine der Hauptverwendungen für ein SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Werkzeuge wie OWASP's [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen für Schwachstellenberichte wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) scannen.
- **Integritätsprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle einer Abhängigkeit nicht von ihrer ursprünglichen Veröffentlichungsform verändert wurde.
- **Lieferanten-Risikomanagement**: Indem Sie Informationen über den Lieferanten Ihrer Abhängigkeiten erfassen, kann Ihnen ein SBOM helfen zu verstehen, wann Sie auf Komponenten oder Dienste von Lieferanten angewiesen sind, die nicht mehr als zuverlässig angesehen werden.

## Überwachung und Reaktion

Sobald eine Website bereitgestellt ist, können Sie helfen, Angriffe zu erkennen und darauf zu reagieren, indem Sie relevante Ereignisse protokollieren und Projektbetreuer benachrichtigen, wenn potenziell verdächtige Aktivitäten entdeckt werden.

Sie müssen ein Gleichgewicht finden, bei dem Betreuer über echte Probleme informiert werden, aber nicht ständig durch Fehlalarme alarmiert werden. Die spezifischen Ereignisse, die protokolliert werden sollten, und die Untermenge der Ereignisse, die Alarme auslösen sollten, hängen vom Projekt und seinem [Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling) ab, umfasst aber häufig:

- Eingabevalidierungsfehler: Fälle, in denen Benutzereingaben nicht das sind, was Ihre Website erwartet. Eingabetypen umfassen Formulareingaben, URL-Parameter oder Datei-Uploads. Validierungsfehler umfassen Eingaben mit unerwarteten Werten, Formaten, Längen oder Parameternamen. Benutzereingaben, die nicht manuell eingegeben wurden, wie eine nicht existierende {{htmlelement("select")}}-Option, sind besonders verdächtig.

- Ereignisse im Zusammenhang mit Authentifizierung:
  - Fehlgeschlagene Anmeldeversuche, insbesondere wiederholte Misserfolge in kurzer Zeit.
  - Anmeldungen von unerwarteten Standorten oder Geräten.
  - Ereignisse der Anmeldeinformationen-Verwaltung: Ändern, Erstellen oder Löschen von Anmeldeinformationen.
  - Auslösen von sekundären Abläufen wie Passwortvergessen-Abläufen.

- Zugriffssteuerungsfehler: Versuche, auf Ressourcen ohne die richtige Berechtigung zuzugreifen.

- [CSP](/de/docs/Web/HTTP/Guides/CSP) Verstöße, die mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden können.

Sie sollten auch eine Möglichkeit bieten, damit Benutzer Sicherheitsprobleme mit Ihrer Website melden können. Projekte können ihre Sicherheitsrichtlinie mithilfe einer `SECURITY.md`-Datei im Stammverzeichnis ihres Repositories kommunizieren. Diese Datei erklärt, wie Benutzer oder Forscher Schwachstellen melden können, wie Sie diese Berichte handhaben werden und Einzelheiten zu Ihrem Bug-Bounty-Programm, falls Sie eines haben.

Websites können auch eine Möglichkeit bieten, um Endbenutzern zu erlauben, Sicherheitsprobleme zu melden, beispielsweise mithilfe einer dedizierten E-Mail-Adresse.

## Backups erstellen

Regelmäßige Backups Ihrer Website und insbesondere Ihrer Daten bieten eine Abwehrmaßnahme gegen eine Reihe von Problemen, einschließlich, aber nicht beschränkt auf aktive Angriffe:

- Fehler von Betreuern oder fehlerhafte Werkzeuge, die zu Datenverlust oder -beschädigung führen.
- Vandalismus durch einen Angreifer mit Schreibzugriff.
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware)-Angriffe, bei denen ein Angreifer die Daten des Opfers unzugänglich macht (zum Beispiel durch Verschlüsselung), es sei denn, das Opfer bezahlt ein Lösegeld, um sie wiederherzustellen.

Sie sollten auch die Vertraulichkeit und Integrität der Backups schützen: das heißt, sicherstellen, dass Angreifer nicht auf sensible Daten zugreifen oder diese verändern können, die sie enthalten.

## Siehe auch

- [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) (OWASP)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) - Ein zentraler Hub für Sicherheitsleitlinien und -ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Supply-Chain-Sicherheit](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript SBOM und Softwaretestierungen
  - [Sicherheitskonformitätsrichtlinien](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für die Betriebssicherheit
  - [npm Security Best Practices Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) - Best Practices zur Sicherung von npm-Paketen und Abhängigkeiten
  - [Leitfaden für sichere Releases](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien zur Erstellung sicherer Software-Releases
