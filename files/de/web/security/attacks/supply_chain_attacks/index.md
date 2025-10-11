---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

Eine _Software-Lieferkette_ besteht aus allen Software- und Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Software und Werkzeuge, die in deren Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hierfür ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket eines Drittanbieters verwenden, kann es Ihre Website kompromittieren. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es eigene Sicherheitslücken enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Werkzeuge könnte bösartigen oder anfälligen Code in Ihr finales Softwareprodukt einfügen, im Laufe der Transformationen, die sie anwenden.

In diesem Dokument skizzieren wir Praktiken, die zur Sicherung Ihrer Software-Lieferkette befolgt werden sollten. Es ist in zwei Hauptabschnitte gegliedert:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwalten von Drittanbieter-Abhängigkeiten](#verwalten_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einzuführen. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugangskontrolle

Implementieren Sie starke Zugangskontrollen für alle, die am Projekt arbeiten, einschließlich aller Personen mit Schreibzugriff auf Ihr Code-Repository oder mit Berechtigungen zur Änderung der Build- oder Testkonfiguration. Gute Praktiken sind hier:

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgen des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechtevergabe")}}: Das heißt, nur denjenigen Teammitgliedern Privilegien zu gewähren, die sie benötigen, und die Anzahl der Teammitglieder mit sehr mächtigen Berechtigungen aktiv zu minimieren.

### Sicherung von Werkzeugen

Bewerten Sie das Sicherheitsrisiko aller Werkzeuge, die Sie bei der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Werkzeuge, die an Ihren Build-, Test- und Deployment-Prozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Kompakten Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) der [OpenSSF](https://openssf.org/) als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Anfragen (PRs) überprüft und ausdrücklich von einem Code-Eigentümer genehmigt werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen müssen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert werden.

Siehe die [Best Practices zur Plattformkonfiguration des Quellcode-Managements](https://best.openssf.org/SCM-BestPractices/) der OpenSSF, die spezifische Checklisten für GitHub und GitLab beinhalten.

## Verwalten von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Werkzeuge, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanagern und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, besprechen wir vier Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege einer _Software-Stückliste_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, wie viel Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie über eine Erfolgsbilanz bei der Behebung von Problemen verfügt und einen Prozess zum Melden und Reagieren auf Sicherheitslücken hat.

Sie sollten überlegen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten überwiegt, die Funktion selbst zu implementieren.

Der [Kompakte Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, veröffentlicht der Abhängigkeitsanbieter in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitsupdates. Sie werden normalerweise diese Updates nutzen wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Werkzeuge wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Anfragen erstellen, um Ihr Projekt zu aktualisieren.

Das übermäßig eifrige Aktualisieren von Abhängigkeiten birgt jedoch eigene Risiken. Stellen Sie sich zum Beispiel vor, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieterpaket hinzu. Ein Angreifer übernimmt dann das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Verwendung einer Sperrdatei

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen besteht darin, eine _Sperrdatei_ für Abhängigkeiten zu verwenden, sie unter Versionskontrolle zu setzen und beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, wird sie möglicherweise automatisch in Ihrem Projekt enthalten, wenn es erstellt wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt merken.

Angenommen, Ihr package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, Ihr Projekt-Build-Prozess läuft automatisch, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build durch Aufruf von `npm install`. Dies wird die neueste Version von "example-dependency" holen, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

Bei Version `1.0.2`, dem Punkt, an dem Sie es zum Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, gutartiges Paket. Dann übernimmt ein Angreifer den Account des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3`-Version. Ihr Build-Prozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist geschehen, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden oder Ihnen die Möglichkeit gegeben wurde, das Update zu überprüfen und zu prüfen, ob es verdächtig aussieht.

Die Lösung hierfür besteht darin, eine Sperrdatei zu verwenden, wenn Sie Ihr Projekt erstellen. Eine Sperrdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-project" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-project" verwendet werden soll und was die Versionen seiner Abhängigkeiten sind.

Die Sperrdatei Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Wenn Sie Ihr Projekt erstellen, sollten Sie die Sperrdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Das bedeutet, dass Ihr Build-System, um Abhängigkeiten zu aktualisieren, eine Pull-Anfrage stellen muss, um die Sperrdatei zu aktualisieren, und dies gibt Ihnen die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfen von Updates

Bei der Überprüfung eines Updates einer Abhängigkeit sollten Sie überlegen, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Veröffentlichung, um zu verstehen, was es angeblich bietet (und ob Sie es überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Prüfen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige von ihnen unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Erwägen Sie, ein wenig zu warten, bevor Sie aktualisieren: Lieferkettenangriffe werden oft schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege einer Software-Stückliste

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie eine detaillierte Inventarliste von ihnen pflegen. Dies wird als _Software-Stückliste_ (SBOM) bezeichnet.

Eine Sperrdatei ist eigentlich eine Art SBOM: jedoch bezieht sich der Begriff "SBOM" in der Regel auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Sperrdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie z.B. Webdienste, die in einer Sperrdatei nicht dargestellt werden.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die in einer Sperrdatei nicht dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung einer SBOM bedeutet auch, dass Sie:

- Ihre SBOM mit Dritten teilen können
- Werkzeuge integrieren können, die Ihre SBOM für Zwecke wie regulatorische Compliance oder Vulnerabilitätsüberwachung verstehen können.

Die beiden gebräuchlichsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen kompatibel sind, hat aber Funktionen hinzugefügt, um Sicherheitsszenarien zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Aufbau einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software aufrufen kann, beispielsweise über Endpunkt-URIs.

Jede Komponente und jeder Dienst, die im Produkt direkt oder indirekt verwendet werden, wird durch ein Objekt in der SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Die SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element auf der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Abhilfemaßnahmen, Links zu Beratungen und die Bezeichner für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellung einer SBOM

Sie können eine SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom) generieren. Eine SBOM wird normalerweise als Teil des Buildprozesses erstellt, obwohl es möglich ist, sie in anderen Phasen des Software-Lebenszyklus zu generieren.

#### Verwendung einer SBOM

Eine SBOM ermöglicht es Ihnen, mehrere Verteidigungsmaßnahmen gegen Lieferkettenangriffe umzusetzen, und wir werden hier drei wichtige auflisten:

- **Verwundbarkeitsmanagement**: eine der Hauptanwendungen für eine SBOM besteht darin, auf Schwachstellen zu reagieren, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen für Schwachstellenberichte wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) scannen.
- **Integritätsüberprüfung**: Wenn die SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglich veröffentlichten Form modifiziert wurde.
- **Lieferantenrisikomanagement**: Indem Informationen über den Lieferanten Ihrer Abhängigkeiten erfasst werden, kann Ihnen eine SBOM helfen zu verstehen, wann Sie von Komponenten oder Diensten von Lieferanten abhängen, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites enthalten extern gehostete Skripte: am bemerkenswertesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangen kann, kann er das Skript durch ein bösartiges Skript ersetzen und damit Ihre Website kompromittieren.

Externe Skripte sollten wie andere Software-Abhängigkeiten Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts zu setzen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptographischen Hash")}} der Inhalte des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es nicht laden, und Sie sind geschützt.

Dies erhöht jedoch die Wartungsbelastung: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel bei jeder neuen Version), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, so dass Sie es sowohl für CSS-Stylesheets als auch für Skripte verwenden sollten.

Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) für weitere Einzelheiten.

## Verteidigungs-Checkliste

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und Minimieren der gewährten Berechtigungen.
- Bewerten Sie die Werkzeuge, die an Ihren Build-, Test- und Deployment-Prozessen beteiligt sind.
- Sicherstellen, dass Pull-Anfragen überprüft und kontinuierliche Integrationsprüfungen passieren.
- Minimieren Sie Ihre Abhängigkeiten und folgen Sie einem Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Sperrdatei, um Updates Ihrer Abhängigkeiten zu steuern, und folgen Sie einem Prozess zur Annahme von Updates.
- Pflegen Sie eine SBOM und verwenden Sie diese, um nach Schwachstellen zu suchen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
