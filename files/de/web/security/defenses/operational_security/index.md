---
title: Betriebssicherheit
slug: Web/Security/Defenses/Operational_security
l10n:
  sourceCommit: 2d1f9a4d1d01322394b12feebb1f67504383730e
---

In diesem Leitfaden behandeln wir Sicherheitspraktiken, die nicht direkt mit dem von Ihnen geschriebenen Code zusammenhängen, sondern sich darauf konzentrieren, wie Sie Ihr Projekt entwickeln, bauen, bereitstellen und aktualisieren.

Viele dieser Maßnahmen sind Abwehrmaßnahmen gegen [Lieferkettenangriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei denen der Angreifer die Prozesse, die Sie bei der Entwicklung Ihrer Websites befolgen, untergräbt, um bösartigen oder anfälligen Code einzuschleusen. Abwehrmaßnahmen gegen Lieferkettenangriffe zielen gewöhnlich darauf ab, Ihren Entwicklungsprozess abzusichern.

Wir haben diesen Leitfaden in die folgenden Abschnitte unterteilt:

- Sicherung Ihrer Entwicklungsumgebung: beinhaltet Praktiken, die in Bezug auf die Entwicklung und Aktualisierung Ihres eigenen Codes zu befolgen sind.

- Verwaltung von Abhängigkeiten: Fast alle Softwareprojekte hängen von Paketen ab, die von Dritten erstellt wurden. Dieser Abschnitt listet Praktiken auf, die das Risiko verringern, wenn Sie sich dafür entscheiden, diese zu nutzen.

- Überwachung und Reaktion: Dieser Abschnitt listet Praktiken auf, die Ihnen helfen, Sicherheitsprobleme in Ihrem Projekt zu entdecken und darauf zu reagieren.

- Sicherung von Backups.

## Sicherung Ihrer Entwicklungsumgebung

In diesem Abschnitt beschreiben wir Schritte, die Sie ergreifen können, um zu verhindern, dass Angreifer den Code Ihres Projekts gefährden.

### Starke Authentifizierung für Projektverwalter erfordern

Wenn Angreifer die Kontrolle über das Konto eines Verwalters erlangen, können sie bösartigen Code einführen oder ein bösartiges Update ihres Produkts bereitstellen.

Dies bedeutet, dass ein Projekt eine starke Authentifizierungsmethode für Verwalterkonten verwenden muss.

- Nutzen Sie, wenn möglich, [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) zur Authentifizierung der Verwalter.

- Wenn dies nicht möglich ist, verwenden Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}}, indem Sie Passwörter mit [zeitbasierten Einmalpasswörtern (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) kombinieren.

Beachten Sie, dass Angreifer häufig [Phishing](/de/docs/Web/Security/Attacks/Phishing) verwenden, um die Kontrolle über Verwalterkonten zu erlangen. Obwohl MFA Phishing erschwert, [verhindern die meisten Formen von MFA dies nicht vollständig](/de/docs/Web/Security/Attacks/Phishing#multi-factor_authentication). Passkeys bieten den stärksten Schutz gegen Phishing-Angriffe.

### Implementierung der rollenbasierten Zugriffskontrolle für Projektverwalter

Projekte sollten Verwaltern nur die Privilegien gewähren, die sie für ihre Arbeit benötigen. Zum Beispiel könnten Sie nur einem Teil der Verwalter erlauben, die Sicherheitseinstellungen des Projekts zu ändern oder neue Releases zu erstellen. Dies begrenzt den Schaden, den ein Angreifer anrichten kann, falls er das Konto eines Verwalters kompromittiert.

### Bewertung der verwendeten Werkzeuge

Abgesehen von den [direkten Abhängigkeiten von Drittanbietern](#verwaltung_von_drittanbieter-abhängigkeiten) verwenden Projekte typischerweise eine Reihe von Drittanbieter-Tools im Prozess der Softwareentwicklung, -prüfung und -bereitstellung. Dazu gehören beispielsweise:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle an Ihrem Build-, Prüf- und Bereitstellungsprozess beteiligten Werkzeuge

Wenn ein Angreifer diese Werkzeuge kompromittieren kann, kann er möglicherweise auch Ihr Produkt kompromittieren. Sie können das Risiko hier reduzieren, indem Sie die Werkzeuge bewerten, bevor Sie sich entscheiden, sie zu verwenden. Für Open-Source-Software-Abhängigkeiten können Sie den [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) der [OpenSSF](https://openssf.org/) als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und anwenden Sie sichere Einstellungen für Ihre Werkzeuge, insbesondere Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Requests (PRs) vor der Zusammenführung durch einen Code-Eigentümer überprüft und explizit genehmigt werden.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Anfordern, dass Commits signiert sind.

Siehe die [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezielle Checklisten für GitHub und GitLab beinhalten.

### Sicheres Verwalten von Geheimnissen

Projektverwalter müssen typischerweise Anmeldeinformationen verwenden, wie Passwörter oder API-Schlüssel, die geheim gehalten werden müssen. Projekte sollten sicherstellen, dass diese ordnungsgemäß verwaltet werden:

- Geheimnisse sollten sicher gespeichert werden.
- Der Zugriff auf Geheimnisse sollte kontrolliert und auf die Verwalter beschränkt werden, die sie benötigen.
- Geheimnisse sollten niemals in öffentliche Repositories eingecheckt werden. Tools zum Scannen von Repositories auf Geheimnisse sind verfügbar, entweder als Teil von Versionskontroll- oder Hosting-Systemen oder als Dienste von Drittanbietern.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die an der Entwicklung beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanagern und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten abzuschwächen, diskutieren wir die folgenden Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflegen eines _Software Bill of Materials_ (SBOM)

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie einschätzen, wie groß das Sicherheitsrisiko ist, das sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gewartet wird, über eine Historie zur Behebung von Problemen verfügt und einen Prozess zum Melden und Reagieren auf Sicherheitslücken hat.

Sie sollten abwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten für die Implementierung der Funktion selbst überwiegt.

Der [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie sich stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit typischerweise neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitskorrekturen herausgeben. Normalerweise möchten Sie diese Aktualisierungen nutzen, indem Sie einen Mechanismus implementieren, der die Abhängigkeit auf dem neuesten Stand hält. Werkzeuge wie GitHubs [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt das zu eifrige Aktualisieren von Abhängigkeiten eigene Risiken. Nehmen wir an, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer übernimmt dann das Konto des Entwicklers des Pakets und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt kompromittiert.

#### Verwendung einer Sperrdatei

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen besteht darin, eine _Sperrdatei_ für Abhängigkeiten zu verwenden, diese in die Versionskontrolle einzuchecken und sie beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Jedoch bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version freigibt, kann diese automatisch in Ihr Projekt eingefügt werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt merken.

Angenommen, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Build-Prozess Ihres Projekts läuft automatisch, wenn Ihre Lieferanten neue Versionen freigeben. Der Build-Prozess beginnt mit dem Aufruf von `npm install`. Dies wird die neueste Version von "example-dependency" abrufen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

Bei der Version `1.0.2`, dem Punkt, an dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, gutartiges Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3` Version. Ihr Build-Prozess läuft, installiert das bösartige Paket und Sie sind kompromittiert.

All das ist passiert, ohne dass sich die direkten Artefakte Ihres Projekts geändert haben oder dass Sie die Möglichkeit hatten, das Update zu prüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür besteht darin, beim Erstellen Ihres Projekts eine Sperrdatei zu verwenden. Eine Sperrdatei wird automatisch generiert, sobald die Abhängigkeiten eines Projekts installiert sind. Sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden. Mit der Sperrdatei können Sie keine anderen Versionen der Abhängigkeiten mehr installieren als die, die darin aufgelistet sind.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" zu verwenden ist und welche Versionen seiner Abhängigkeiten das sind.

Die Sperrdatei Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Sperrdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: In npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Das bedeutet, dass Ihr Build-System eine Pull-Anfrage erstellen muss, um die Sperrdatei zu aktualisieren, was Ihnen die Möglichkeit gibt, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Updates überprüfen

Beim Überprüfen eines Updates einer Abhängigkeit sollten Sie prüfen, ob es sich um ein Update handelt, das Sie akzeptieren möchten:

- Lesen Sie das Changelog für die Veröffentlichung, um zu verstehen, was es angeblich bietet (und ob Sie es zu diesem Zeitpunkt überhaupt akzeptieren müssen).
- Schauen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige davon unerklärlich sind oder nicht mit dem Changelog übereinstimmen.
- Erwägen Sie, ein wenig zu warten, bevor Sie das Update durchführen: Oft werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflegen eines Software Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu bekommen, können Sie ein detailliertes Inventar dieser führen. Dies wird als _Software Bill of Materials_ (SBOM) bezeichnet.

Eine Sperrdatei ist eigentlich eine Art SBOM: jedoch wird der Begriff "SBOM" normalerweise verwendet, um auf ein separates Standardformat zur Darstellung von Abhängigkeiten zu verweisen. Diese Standards sind gewöhnlich sowohl breiter als auch tiefer als eine Sperrdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie Webdienste, die in einer Sperrdatei nicht dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die in einer Sperrdatei nicht dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Tools integrieren können, die Ihr SBOM verstehen können, für Zwecke wie regulatorische Compliance oder Überwachung von Schwachstellen.

Die beiden häufigsten Standards zur Darstellung eines Software Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben eine gute Unterstützung, und Sie können entweder einen von beiden verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkte bei der Einhaltung von Open-Source-Softwarelizenzen zu unterstützen, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungen zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf fokussiert war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für vollständige Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, aber sind nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste stellen externe APIs dar, die Software aufrufen kann, zum Beispiel durch Endpoint-URIs.

Jede direkt oder indirekt in dem Produkt verwendete Komponente und Dienst wird durch ein Objekt im SBOM repräsentiert. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpoint-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, eines Satzes von [CWE](https://cwe.mitre.org/index.html)-Codes, Abhilfemaßnahmen, Links zu Beratungen und die Bezeichner für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellen eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) erstellen. Normalerweise wird ein SBOM als Teil des Build-Prozesses generiert, obwohl es möglich ist, eines in anderen Phasen des Softwarelebenszyklus zu erstellen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Abwehrmaßnahmen gegen Lieferkettenangriffe zu implementieren; die drei wichtigsten sind wie folgt:

- **Schwachstellen-Management**: eine der Hauptanwendungen für ein SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Tools von Drittanbietern wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Integritätsprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle einer Abhängigkeit nicht von ihrer ursprünglichen veröffentlichten Form geändert wurde.
- **Risikomanagement von Lieferanten**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie von Komponenten oder Diensten von Lieferanten abhängig sind, die nicht mehr als zuverlässig gelten.

## Überwachung und Reaktion

Sobald eine Website bereitgestellt ist, können Sie Angriffe erkennen und darauf reagieren, indem Sie relevante Ereignisse protokollieren und Projektverwalter benachrichtigen, wenn potenziell verdächtige Aktivitäten erkannt werden.

Sie müssen ein Gleichgewicht finden, bei dem Verwalter über echte Probleme informiert werden, aber nicht ständig durch Fehlalarme angefordert werden. Die spezifischen Ereignisse, die protokolliert werden sollten, und die Teilmenge von Ereignissen, die Alarme auslösen sollten, hängen vom Projekt und seinem [Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling) ab, umfassen jedoch häufig:

- Fehler bei der Eingabevalidierung: Fälle, in denen Benutzereingaben nicht dem entsprechen, was Ihre Website erwartet. Zu den Eingabearten gehören Formulareingaben, URL-Parameter oder Datei-Uploads. Validierungsfehler umfassen Eingaben mit unerwarteten Werten, Formaten, Längen oder Parameternamen. Benutzereingaben, die nicht manuell eingegeben worden sein könnten, wie eine nicht existierende {{htmlelement("select")}}-Option, sind besonders verdächtig.

- Ereignisse im Zusammenhang mit der Authentifizierung:
  - Fehlgeschlagene Anmeldeversuche, insbesondere wiederholte Fehlschläge in kurzer Zeitspanne.
  - Anmeldungen von unerwarteten Standorten oder Geräten.
  - Ereignisse im Zusammenhang mit dem Anmeldeinformations-Management: Ändern, Erstellen oder Löschen von Anmeldeinformationen.
  - Auslösen von sekundären Abläufen wie Passwortrücksetzungsprozessen.

- Fehler bei der Zugriffskontrolle: Versuche, auf Ressourcen ohne das korrekte Autorisierungslevel zuzugreifen.

- [CSP](/de/docs/Web/HTTP/Guides/CSP)-Verstöße, die unter Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden können.

Sie sollten auch eine Möglichkeit bereitstellen, damit Benutzer Sicherheitsprobleme mit Ihrer Website melden können. Projekte können ihre Sicherheitsrichtlinie mit einer `SECURITY.md`-Datei im Stammverzeichnis ihres Repositories kommunizieren. Diese Datei erklärt, wie Benutzer oder Forscher Schwachstellen melden können, wie Sie diese Berichte behandeln und Einzelheiten zu Ihrem Bug-Bounty-Programm, falls vorhanden.

Websites können auch eine Möglichkeit bieten, damit Endbenutzer Sicherheitsprobleme melden, zum Beispiel durch die Verwendung einer dedizierten E-Mail-Adresse.

## Sicherung von Backups

Das regelmäßige Erstellen von Backups Ihrer Website und insbesondere Ihrer Daten bietet eine Verteidigung gegen eine Reihe von Problemen, einschließlich, aber nicht beschränkt auf aktive Angriffe:

- Fehler von Verwaltern oder fehlerhafte Tools, die zu Datenverlust oder -korruption führen.
- Vandalismus durch einen Angreifer mit Schreibzugriff.
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware)-Angriffe, bei denen ein Angreifer die Daten des Opfers unzugänglich macht (zum Beispiel durch Verschlüsselung), sofern das Opfer kein Lösegeld zahlt, um es wiederherzustellen.

Sie sollten auch die Vertraulichkeit und Integrität von Backups schützen: Das heißt, sicherstellen, dass Angreifer keinen Zugriff auf enthaltene sensible Daten haben oder diese nicht ändern können.

## Siehe auch

- [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) (OWASP)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) - Ein zentraler Knotenpunkt für Sicherheitsleitlinien und Ressourcen im JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Lieferkettensicherheit](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript SBOMs und Software-Zeugnisse
  - [Sicherheitskonformitätsrichtlinien](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für Betriebssicherheit
  - [npm Sicherheits-Best-Practices-Leitfaden](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) - Beste Praktiken zur Sicherung von npm-Paketen und -Abhängigkeiten
  - [Leitfaden für sichere Releases](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien zur Erstellung sicherer Software-Releases
