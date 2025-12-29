---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Eine _Software-Lieferkette_ besteht aus allen Software- und Tools, die zur Erstellung und Pflege eines Softwareprodukts verwendet werden. Dies umfasst nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Tools, die in der Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hierfür ist eine Drittanbieterbibliothek. Wenn Sie beispielsweise ein von einem Drittanbieter entwickeltes [npm](https://www.npmjs.com/)-Paket verwenden, hat dieses die Möglichkeit, Ihre Seite zu kompromittieren. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso viel Vertrauen entgegenbringen wie Ihrem eigenen Code.

Weniger offensichtlich ist, dass dasselbe Prinzip für alle Tools gilt, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools usw. Jedes dieser Tools könnte bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen, während der Transformationen, die sie anwenden.

In diesem Dokument skizzieren wir Praktiken, die zu befolgen sind, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte unterteilt:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, die dazu beitragen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwalten von Drittanbieter-Abhängigkeiten](#verwalten_von_drittanbieter-abhängigkeiten): Praktiken, die dazu beitragen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff ist es, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung der Zugangskontrolle

Implementieren Sie eine starke Zugangskontrolle für alle, die am Projekt arbeiten, einschließlich aller, die Schreibzugriff auf Ihr Code-Repository oder über die Berechtigungen zur Änderung der Build- oder Testkonfiguration verfügen. Gute Praktiken umfassen hier:

- Erfordern der {{Glossary("multi-factor_authentication", "mehrstufigen Authentifizierung")}} für Teammitglieder.
- Befolgen des {{Glossary("principle_of_least_privilege", "Prinzips der geringsten Privilegien")}}: das heißt, Teammitgliedern nur die Privilegien zu geben, die sie benötigen, und aktiv die Anzahl der Teammitglieder zu minimieren, die sehr mächtige Berechtigungen erhalten.

### Absicherung von Tools

Bewerten Sie das Sicherheitsrisiko aller Tools, die Sie bei der Erstellung Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die in Ihren Build-, Test- und Bereitstellungsprozessen involviert sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Konkreten Leitfaden zur Evaluierung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Tools an, insbesondere Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Requests (PRs) eine Überprüfung und explizite Genehmigung durch einen Codeinhaber durchlaufen, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "kontinuierliche Integrationsprüfungen")}} bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe die [Best Practices für die Konfiguration von Quellcode-Verwaltungsplattformen](https://best.openssf.org/SCM-BestPractices/), die spezifische Checklisten für GitHub und GitLab enthalten.

## Verwalten von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die im Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, werden wir vier Praktiken besprechen:

1. Bewertung neuer Abhängigkeiten
2. Aktualisieren bestehender Abhängigkeiten
3. Erhaltung einer _Software-Stückliste_ (SBOM)
4. Verwendung der Subresource-Integrität für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, wie viel Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie in der Vergangenheit Probleme behoben hat und einen Prozess zum Melden und Reagieren auf Sicherheitslücken gibt.

Sie sollten überlegen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten überwiegt, die Funktionalität selbst zu implementieren.

Der [Konkrete Leitfaden zur Evaluierung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisieren von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Bugfixes und Sicherheitskorrekturen veröffentlichen. Sie möchten in der Regel von diesen Updates profitieren, indem Sie einen Mechanismus implementieren, um die Abhängigkeit aktuell zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können Ihnen dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Es birgt jedoch eigene Risiken, Abhängigkeiten zu schnell zu aktualisieren. Beispielsweise nehmen wir an, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieterpaket hinzu. Dann erlangt ein Angreifer die Kontrolle über das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Verwendung einer Lock-Datei

Der erste Schritt zur Sicherung von Abhängigkeitsupdates ist die Verwendung einer _Lock-Datei_ für Abhängigkeiten, deren Einbindung in die Versionskontrolle und deren Verwendung beim Erstellen Ihres Projekts.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen Ihnen das Bereitstellen einer Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/), die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die gegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, kann diese möglicherweise automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, könnte sie automatisch in Ihr Projekt integriert werden, ohne dass Sie es überhaupt bemerken.

Angenommen, Ihre package.json enthält eine Abhängigkeit mit dem Namen "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, der Build-Prozess Ihres Projekts wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build durch Aufruf von `npm install`. Dies wird die neueste Version von "example-dependency" holen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

Bei Version `1.0.2`, die der Punkt war, an dem Sie sie dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess wird ausgeführt, installiert das bösartige Paket und Sie sind kompromittiert.

All dies ist geschehen, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden, oder ohne dass Sie die Möglichkeit hatten, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür besteht darin, beim Erstellen Ihres Projekts eine Lock-Datei zu verwenden. Eine Lock-Datei wird automatisch generiert, wenn die Abhängigkeiten eines Projekts installiert werden, und listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau mitteilen, welche Version von "example-dependency" zu verwenden ist und welche Versionen seiner Abhängigkeiten sind.

Die Lock-Datei Ihres Projekts sollte in die Versionskontrolle übernommen werden. Beim Bauen Ihres Projekts sollten Sie die Lock-Datei verwenden, um zu kontrollieren, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Dies bedeutet, dass Ihr Build-System einen Pull-Request machen muss, um die Lock-Datei zu aktualisieren, und dies gibt Ihnen die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung der Updates

Bei der Überprüfung eines Updates für eine Abhängigkeit erwägen Sie, ob es sich um ein Update handelt, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Veröffentlichung, um zu verstehen, was es bietet (und ob Sie es überhaupt annehmen müssen, zu diesem Zeitpunkt).
- Prüfen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige von ihnen unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Erwägen Sie, etwas zu warten, bevor Sie aktualisieren: oft werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Erhaltung einer Software-Stückliste

Um ein tieferes Verständnis Ihrer Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar von ihnen führen. Dies wird als _Software-Stückliste_ (SBOM) bezeichnet.

Eine Lock-Datei ist wirklich eine Art von SBOM: jedoch bezieht sich der Begriff "SBOM" normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Lock-Datei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie Web-Dienste, die nicht in einer Lock-Datei dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Lock-Datei dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Tools integrieren können, die Ihr SBOM für Zwecke wie regulatorische Compliance oder Schwachstellenüberwachung verstehen können.

Die beiden häufigsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich von [OWASP](https://owasp.org/) entwickelt.
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie konform mit Open-Source-Softwarelizenzen sind, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für alle Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, aber sind nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software möglicherweise aufruft, zum Beispiel über Endpunkt-URIs.

Jede in dem Produkt verwendete Komponente und jeder Dienst, entweder direkt oder indirekt, wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, eines Satzes von [CWE](https://cwe.mitre.org/index.html)-Codes, Abmilderungsmethoden, Links zu Beratungen und den Identifikatoren für die Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellen eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Ein SBOM wird in der Regel als Teil des Build-Prozesses generiert, obwohl es möglich ist, eines zu anderen Phasen des Softwarelebenszyklus zu erstellen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Verteidigungen gegen Lieferkettenangriffe zu implementieren, und wir werden hier drei wichtige auflisten:

- **Schwachstellenmanagement**: einer der Hauptanwendungsfälle für ein SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASP's [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) scannen.
- **Integritätsüberprüfung**: wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglich veröffentlichten Form geändert wurde.
- **Lieferantenrisikomanagement**: Durch die Erfassung von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie sich auf Komponenten oder Dienstleistungen von Lieferanten verlassen, die nicht mehr als zuverlässig gelten.

### Verwendung der Subresource-Integrität

Viele Websites beinhalten extern gehostete Skripte: am bemerkenswertesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bedient werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die `cdn.example.org`-Domain erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und so Ihre Website kompromittieren.

Externe Skripte, wie andere Softwareabhängigkeiten, sollten Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das `integrity`-Attribut des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer geändert wurde, wird der Browser es nicht laden und Sie werden geschützt.

Dies fügt eine zusätzliche Wartungsbelastung hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt auch das `integrity`-Attribut, so dass Sie es (und sollten) für CSS-Stylesheets sowie Skripte verwenden.

Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Erfordern der {{Glossary("multi-factor_authentication", "mehrstufigen Authentifizierung")}} für Teammitglieder und Minimieren der gewährten Berechtigungen.
- Bewerten der Tools, die in Ihren Build-, Test- und Bereitstellungsprozessen involviert sind.
- Sicherstellen, dass Pull-Requests eine Überprüfung durchlaufen und {{Glossary("continuous_integration", "kontinuierliche Integrationsprüfungen")}} bestehen.
- Minimieren Ihrer Abhängigkeiten und Befolgen eines Verfahrens zur Bewertung neuer Abhängigkeiten.
- Verwenden einer Lock-Datei, um Updates für Ihre Abhängigkeiten zu steuern, und Befolgen eines Verfahrens zur Annahme von Updates.
- Pflegen eines SBOM und Verwenden desselben zur Überprüfung auf Schwachstellen.
- Verwenden der Subresource-Integrität für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software-Lieferkettensicherheit](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space?tab=readme-ov-file#documents--guides) - Ein zentraler Knotenpunkt für Sicherheitsanleitung und Ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Lieferkettensicherheit](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript-SBOM und Software-Bestätigung
  - [Sicherheits-Compliance-Richtlinien](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für die betriebliche Sicherheit
  - [npm-Sicherheits-Best-Practice-Leitfaden](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/npm-security-best-practices.md) - Beste Praktiken für die Sicherung von npm-Paketen und Abhängigkeiten
  - [Leitfaden für sichere Releases](https://github.com/openjs-foundation/security-collab-space/blob/main/docs/Secure_Releases/secure-releases.md) - Richtlinien für die Erstellung sicherer Software-Releases
