---
title: Betriebssicherheit
slug: Web/Security/Defenses/Operational_security
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

In diesem Leitfaden werden wir Sicherheitspraktiken behandeln, die nicht direkt mit dem von Ihnen geschriebenen Code zusammenhängen, sondern sich darauf konzentrieren, wie Sie Ihr Projekt entwickeln, erstellen, bereitstellen und aktualisieren.

Viele davon sind Abwehrmaßnahmen gegen [Lieferkettenangriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei denen der Angreifer die Prozesse manipuliert, denen Sie beim Entwickeln Ihrer Websites folgen, um bösartigen oder anfälligen Code einzuschleusen. Abwehrmaßnahmen gegen Lieferkettenangriffe zielen in der Regel darauf ab, Ihren Entwicklungsprozess zu sichern.

Wir haben diesen Leitfaden in die folgenden Abschnitte unterteilt:

- Sicherung Ihrer Entwicklungsumgebung: Dies umfasst Praktiken, die Sie im Hinblick auf die Art und Weise, wie Sie Ihren eigenen Code entwickeln und aktualisieren, befolgen sollten.

- Verwaltung von Abhängigkeiten: Fast alle Softwareprojekte hängen von Paketen ab, die von Drittanbietern erstellt werden. Dieser Abschnitt listet Praktiken auf, die das Risiko verringern, wenn Sie sich dafür entscheiden.

- Überwachung und Reaktion: Dieser Abschnitt listet Praktiken auf, die Ihnen helfen, Sicherheitsprobleme in Ihrem Projekt zu erkennen und darauf zu reagieren.

- Sicheres Erstellen von Backups.

## Sicherung Ihrer Entwicklungsumgebung

In diesem Abschnitt beschreiben wir Schritte, die Sie unternehmen können, um zu verhindern, dass Angreifer den Code Ihres Projekts kompromittieren.

### Starke Authentifizierung für Projektverwalter erforderlich

Durch die Übernahme eines Verwalterkontos kann ein Angreifer bösartigen Code einbringen oder ein bösartiges Update des Produkts bereitstellen.

Das bedeutet, dass ein Projekt eine starke Authentifizierungsmethode für Verwalterkonten verwenden muss.

- Verwenden Sie nach Möglichkeit [Passkeys](/de/docs/Web/Security/Authentication/Passkeys), um Verwalter zu authentifizieren.

- Wenn dies nicht möglich ist, verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}}, indem Sie Passwörter mit [zeitbasierten Einmal-Passwörtern (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) kombinieren.

Beachten Sie, dass Angreifer oft [Phishing](/de/docs/Web/Security/Attacks/Phishing) verwenden, um die Kontrolle über Verwalterkonten zu erlangen. Während MFA Phishing erschwert, [verhindern die meisten Formen von MFA es nicht](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication). Passkeys bieten die stärkste Abwehr gegen Phishing-Angriffe.

### Implementierung von rollenbasierter Zugriffskontrolle für Projektverwalter

Projekte sollten Verwaltern nur die Berechtigungen gewähren, die sie für ihre Arbeit benötigen. Beispielsweise könnten Sie nur einem Teil der Verwalter erlauben, die Sicherheitseinstellungen des Projekts zu ändern oder neue Versionen zu erstellen. Dies begrenzt den Schaden, den ein Angreifer anrichten kann, wenn er das Konto eines Verwalters kompromittiert.

### Evaluierung der Tools, die Sie verwenden

Abgesehen von [direkten Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten) verwenden Projekte in der Regel eine Reihe von Drittanbieter-Tools im Entwicklungs-, Test- und Bereitstellungsprozess von Software. Dazu gehören beispielsweise:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die in Ihre Build-, Test- und Bereitstellungsprozesse involviert sind

Wenn ein Angreifer diese Tools kompromittieren kann, besteht die Möglichkeit, dass er Ihr Produkt kompromittiert. Sie können das Risiko verringern, indem Sie Tools vor der Nutzung evaluieren. Für Open-Source-Software-Abhängigkeiten können Sie den [Kompakten Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen Sie sichere Einstellungen für Ihre Tools und wenden Sie diese an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Anfragen (PRs) einer Überprüfung und ausdrücklichen Genehmigung durch einen Codebesitzer unterzogen werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Tests bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe die [Best Practices für die Konfiguration von Source Code Management-Plattformen](https://best.openssf.org/SCM-BestPractices/) des OpenSSF, einschließlich spezifischer Checklisten für GitHub und GitLab.

### Sicherer Umgang mit Geheimnissen

Projektverwalter müssen typischerweise Zugangsdaten wie Passwörter oder API-Schlüssel verwenden, die geheim gehalten werden müssen. Projekte sollten sicherstellen, dass diese ordnungsgemäß gehandhabt werden:

- Geheimnisse sollten sicher gespeichert werden.
- Der Zugriff auf Geheimnisse sollte kontrolliert und auf die Verwalter beschränkt werden, die sie benötigen.
- Geheimnisse sollten niemals in öffentliche Repositorys eingecheckt werden. Tools zum Scannen von Repositorys nach Geheimnissen sind verfügbar, entweder als Bestandteil von Versionskontroll- oder Hostingsystemen oder als Drittanbieterdienste.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Tools, die im Entwicklungsprozess eingesetzt werden, wie Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mildern, werden wir die folgenden Praktiken besprechen:

1. Evaluierung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege eines _Software Bill of Materials_ (SBOM)

### Evaluierung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, welches Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, eine gute Erfolgsbilanz bei der Behebung von Problemen hat und über einen Prozess zur Meldung und Reaktion auf Sicherheitslücken verfügt.

Sie sollten abwägen, ob das Risiko der Hinzufügung der Abhängigkeit schwerer wiegt als die Kosten, die Funktion selbst zu implementieren.

Der [Kompakte Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Abhängigkeiten aktualisieren

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitskorrekturen veröffentlichen. Sie möchten diese Updates in der Regel nutzen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie `GitHub`s [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Anfragen öffnen, um Ihr Projekt zu aktualisieren.

Allerdings bergen zu schnelle Abhängigkeitsaktualisierungen auch Risiken. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer übernimmt dann das Entwicklerkonto des Pakets und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Verwenden Sie eine Lockdatei

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen besteht darin, eine _Lockdatei_ für Abhängigkeiten zu verwenden, sie in die Quellsteuerung zu übernehmen und sie beim Erstellen Ihres Projekts zu nutzen.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen Ihnen die Bereitstellung einer Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/), die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, sodass das Projekt sie verwenden kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Lieferant des Pakets eine neue Version veröffentlicht, kann sie automatisch in Ihr Projekt aufgenommen werden, wenn es erstellt wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie ohne Ihr Wissen automatisch in Ihr Projekt aufgenommen werden.

Angenommen, Ihr `package.json` enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, Ihr Build-Prozess wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build, indem `npm install` aufgerufen wird. Dadurch wird die neueste Version von "example-dependency" abgerufen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

Bei Version `1.0.2`, dem Zeitpunkt, zu dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess wird ausgeführt, installiert das bösartige Paket, und Sie sind kompromittiert.

Das alles geschieht, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen werden oder Sie die Möglichkeit haben, das Update zu überprüfen und zu entscheiden, ob es verdächtig wirkt.

Die Lösung hierfür besteht darin, beim Erstellen Ihres Projekts eine Lockdatei zu verwenden. Eine Lockdatei wird immer dann automatisch generiert, wenn die Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden. Mit der vorhandenen Lockdatei können Sie keine anderen als die darin aufgeführten Versionen der Abhängigkeiten installieren.

Das heißt, wenn _package.json_ Ihnen mitteilt, dass Ihr Projekt "example-dependency" verwendet, dann teilt Ihnen _package.lock_ genau mit, welche Version von "example-dependency" verwendet werden soll und welche Versionen seiner Abhängigkeiten vorliegen.

Die Lockdatei Ihres Projekts sollte in die Quellsteuerung eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Lockdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als „Version Pinning“ bezeichnet.

Das bedeutet, dass Ihr Buildsystem, um Abhängigkeiten zu aktualisieren, eine Pull-Anfrage erstellen muss, um die Lockdatei zu aktualisieren, und das gibt Ihnen die Gelegenheit, das Update zu überprüfen und zu entscheiden, ob Sie es akzeptieren möchten.

#### Updates überprüfen

Bei der Überprüfung eines Updates einer Abhängigkeit sollten Sie überlegen, ob es sich um ein Update handelt, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Version, um zu verstehen, was sie angeblich bietet (und ob Sie es überhaupt akzeptieren müssen).
- Prüfen Sie, ob zusätzliche Abhängigkeiten eingeführt werden.
- Überprüfen Sie, wenn möglich, die Updates des Quellcodes und sehen Sie nach, ob welche davon unverständlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Ziehen Sie in Betracht, ein wenig zu warten, bevor Sie ein Update akzeptieren: Häufig werden Supply-Chain-Angriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege eines Software Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu bekommen, können Sie ein detailliertes Inventar davon pflegen. Dies wird als _Software Bill of Materials (SBOM)_ bezeichnet.

Eine Lockdatei ist eigentlich eine Art SBOM: allerdings bezieht sich der Begriff "SBOM" normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefgehender als eine Lockdatei. Das heißt:

- Sie können Abhängigkeiten wie Webdienste erfassen, die nicht in einer Lockdatei dargestellt sind.
- Sie können zusätzliche Informationen zu jeder Abhängigkeit erfassen, die nicht in einer Lockdatei dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Tools integrieren können, die Ihr SBOM verstehen können, zu Zwecken wie regulatorischer Compliance oder Schwachstellenüberwachung.

Die beiden gängigsten Standards zur Darstellung einer Software-Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich von [OWASP](https://owasp.org/) entwickelt.
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards werden gut unterstützt, und Sie können entweder verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf fokussiert, Produkten zu helfen, die Einhaltung von Open-Source-Softwarelizenzen sicherzustellen, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichtgewichtigerer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Die vollständigen Details finden Sie im CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, aber beschränken sich nicht auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software aufrufen kann, z. B. über Endpunkt-URIs.

Jede in das Produkt direkt oder indirekt verwendete Komponente und jeder Dienst wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über den Gegenstand, einschließlich seines Namens, der Version, des Autors, der Lizenz, der Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und der Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen zu dieser Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Abhilfemaßnahmen, Links zu Hinweisen und den Kennungen für die Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellen eines SBOM

Sie können ein SBOM für ein Produkt mithilfe eines separaten Tools wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder eines Befehls wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Ein SBOM wird in der Regel als Teil des Build-Prozesses generiert, obwohl es möglich ist, eines in anderen Phasen des Softwarelebenszyklus zu generieren.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Abwehrmaßnahmen gegen Lieferkettenangriffe umzusetzen; die drei wichtigsten sind wie folgt:

- **Verwaltung von Schwachstellen**: Eine der Hauptanwendungen eines SBOM besteht darin, auf Schwachstellen zu reagieren, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Tools von Drittanbietern wie `OWASP`s [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Prüfung der Integrität**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle einer Abhängigkeit nicht von ihrer ursprünglich veröffentlichten Form geändert wurde.
- **Lieferantenrisikomanagement**: Durch die Erfassung von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie von Komponenten oder Diensten von Lieferanten abhängen, die nicht mehr als zuverlässig gelten.

## Überwachung und Reaktion

Sobald eine Website bereitgestellt ist, können Sie helfen, Angriffe zu erkennen und darauf zu reagieren, indem Sie relevante Ereignisse protokollieren und Projektverwalter benachrichtigen, wenn potenziell verdächtige Aktivitäten festgestellt werden.

Sie müssen ein Gleichgewicht finden, bei dem Verwalter über reale Probleme informiert werden, aber nicht ständig durch Fehlalarme benachrichtigt werden. Die spezifischen Ereignisse, die protokolliert werden sollten, und der Anteil von Ereignissen, die Alarme auslösen sollten, hängen vom Projekt und dessen [Threat Model](/de/docs/Web/Security/Threat_modeling) ab, umfassen jedoch häufig:

- Fehler bei der Eingabevalidierung: Fälle, in denen Benutzereingaben nicht dem entsprechen, was Ihre Website erwartet. Zu den Eingabetypen gehören Formulareingaben, URL-Parameter oder Datei-Uploads. Validierungsfehler umfassen Eingaben mit unerwarteten Werten, Formaten, Längen oder Parameternamen. Benutzereingaben, die nicht manuell eingegeben worden sein könnten, wie eine nicht existierende Option im {{htmlelement("select")}}, sind besonders verdächtig.

- Ereignisse im Zusammenhang mit Authentifizierung:
  - Fehlgeschlagene Anmeldeversuche, insbesondere wiederholte Fehlschläge in kurzer Zeit.
  - Anmeldungen aus unerwarteten Standorten oder Geräten.
  - Ereignisse zur Verwaltung von Zugangsdaten: Ändern, Erstellen oder Löschen von Zugangsdaten.
  - Auslösen von Sekundärabläufen wie Passwort-vergessen-Abläufen.

- Fehler bei der Zugriffskontrolle: Versuche, auf Ressourcen ohne das korrekte Berechtigungsniveau zuzugreifen.

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen, die mit der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden können.

Sie sollten auch eine Möglichkeit bieten, Benutzern zu ermöglichen, Sicherheitsprobleme mit Ihrer Website zu melden. Projekte können ihre Sicherheitsrichtlinien mittels einer `SECURITY.md`-Datei im Stammverzeichnis ihres Repositorys kommunizieren. Diese Datei erklärt, wie Benutzer oder Forscher Schwachstellen melden können, wie Sie mit diesen Meldungen umgehen und Details zu Ihrem Bug-Bounty-Programm, falls vorhanden.

Websites können auch eine Möglichkeit bieten, Endbenutzern Sicherheitsprobleme zu melden, beispielsweise über eine dedizierte E-Mail-Adresse.

## Erstellung von Backups

Regelmäßige Backups Ihrer Website und insbesondere Ihrer Daten bieten eine Abwehrmaßnahme gegen eine Reihe von Problemen, einschließlich, aber nicht beschränkt auf aktive Angriffe:

- Fehler durch Verwalter oder fehlerhafte Tools, die zu Datenverlust oder -beschädigung führen.
- Vandalismus durch einen Angreifer mit Schreibzugriff.
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware)-Angriffe, bei denen ein Angreifer die Daten des Opfers unzugänglich macht (z. B. durch Verschlüsselung), es sei denn, das Opfer zahlt ein Lösegeld, um sie wiederherzustellen.

Sie sollten auch die Vertraulichkeit und Integrität der Backups schützen: das heißt, sicherstellen, dass Angreifer keinen Zugriff auf oder Änderungen an sensiblen Daten vornehmen können, die sie enthalten.

## Siehe auch

- [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) (OWASP)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) - Ein zentraler Hub für Sicherheitsleitlinien und -ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Lieferkettensicherheit](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript SBOM und Software-Attestation
  - [Leitlinien zur Sicherheitskonformität](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für Betriebssicherheit
  - [npm Security Best Practices Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) - Best Practices zur Sicherung von npm-Paketen und -Abhängigkeiten
  - [Leitfaden für sichere Releases](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien für die Erstellung sicherer Software-Releases
