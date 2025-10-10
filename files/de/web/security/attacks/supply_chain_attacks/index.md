---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 1ed4fef175cef923a81390f28a23c070b1efe171
---

Eine _Software-Lieferkette_ besteht aus der gesamten Software und den Tools, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Tools, die bei dessen Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer darauf ab, einen Teil der Lieferkette des Produkts zu kompromittieren, um das Produkt selbst zu gefährden.

Das offensichtlichste Beispiel ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket eines Drittanbieters verwenden, hat dieses die Fähigkeit, Ihre Seite zu kompromittieren. Es kann dies absichtlich tun, wenn es bösartig ist, oder versehentlich, wenn es eigene unbeabsichtigte Sicherheitslücken enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen, wie Sie Ihrem eigenen Code vertrauen.

Weniger offensichtlich ist, dass das gleiche Prinzip für alle Werkzeuge gilt, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Werkzeuge könnte im Verlauf der von ihnen angewendeten Transformationen bösartigen oder verletzlichen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken zur Sicherung Ihrer Software-Lieferkette. Es ist in zwei Hauptabschnitte gegliedert:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, die helfen sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten): Praktiken, die helfen sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Ansatzpunkt für einen Lieferkettenangriff ist, dass ein Angreifer direkt Schwachstellen oder bösartigen Code in ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugriffskontrollen

Implementieren Sie eine starke Zugriffskontrolle für alle, die an dem Projekt arbeiten, einschließlich aller Personen mit Schreibzugriff auf Ihr Code-Repository oder den Berechtigungen zur Änderung der Build- oder Testkonfiguration. Gute Praktiken sind hier:

- Anfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgung des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechtevergabe")}}: das bedeutet, nur dann Berechtigungen zu vergeben, wenn sie benötigt werden, und die Anzahl der Teammitglieder, die sehr mächtige Berechtigungen erhalten, aktiv zu minimieren.

### Sicherung der Werkzeuge

Bewerten Sie das Sicherheitsrisiko aller Werkzeuge, die Sie bei der Produktion Ihrer Seite verwenden, einschließlich:

- Text-Editoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Werkzeuge, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Tools an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellung, dass Pull-Requests (PRs) eine Überprüfung und ausdrückliche Genehmigung durch einen Code-Eigentümer durchlaufen, bevor sie zusammengeführt werden können.
- Sicherstellung, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Anforderung, dass Commits signiert sind.

Siehe OpenSSF's [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/), das spezifische Checklisten für GitHub und GitLab umfasst.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Tools, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, besprechen wir vier Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege einer _Software-Stückliste_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie einschätzen, wie viel Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gewartet wird, dass sie eine Historie der Behebung von Problemen und einen Prozess zum Melden und Reagieren auf Sicherheitslücken hat.

Sie sollten überlegen, ob das Risiko durch die Hinzufügung der Abhängigkeit die Kosten für die eigenständige Implementierung der Funktion überwiegt.

Der [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie sich stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung der Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit normalerweise neue Versionen mit neuen Features, Fehlerbehebungen und Sicherheitskorrekturen veröffentlichen. Sie werden in der Regel davon profitieren wollen, diese Updates zu implementieren, indem Sie einen Mechanismus einführen, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt die zu eilige Aktualisierung von Abhängigkeiten auch eigene Risiken. Zum Beispiel, stellen Sie sich vor, Sie fügen eine Abhängigkeit von einem zuverlässigen Drittanbieter-Paket hinzu. Ein Angreifer erlangt dann die Kontrolle über das Konto des Pakeentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt gefährdet.

#### Verwendung eines Lockfiles

Der erste Schritt zur Sicherung von Abhängigkeits-Updates besteht darin, ein _Lockfile_ für Abhängigkeiten zu verwenden, es in die Versionskontrolle einzuchecken und es beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json?v=true) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die gegebenen Abhängigkeiten installiert, damit das Projekt sie nutzen kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die exakte Version jedes Pakets: Wenn der Paketanbieter eine neue Version herausbringt, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es erstellt wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie sich dessen überhaupt bewusst sind.

Nehmen wir an, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, Ihr Build-Prozess wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build, indem er `npm install` aufruft. Dies wird die neueste Version von "example-dependency" abrufen, vorbehaltlich der Versionsspanne `"^1.0.2"`.

Bei der Version `1.0.2`, dem Zeitpunkt, an dem Sie sie zum Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3`-Version. Ihr Build-Prozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist geschehen, ohne dass irgendwelche Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden oder Ihnen eine Gelegenheit geboten wurde, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung hierfür besteht darin, ein Lockfile beim Erstellen Ihres Projekts zu verwenden. Ein Lockfile wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und es listet die exakten Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-project" verwendet, wird _package.lock_ Ihnen genau mitteilen, welche Version von "example-project" zu verwenden ist und welche Versionen seiner Abhängigkeiten zu verwenden sind.

Das Lockfile Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie das Lockfile verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/v10/commands/npm-ci) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Dies bedeutet, dass Ihr Build-System einen Pull-Request erstellen muss, um das Lockfile zu aktualisieren, und dies gibt Ihnen die Chance, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Bei der Überprüfung eines Updates einer Abhängigkeit überlegen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Veröffentlichung, um zu verstehen, was es zu bieten behauptet (und ob Sie es überhaupt an diesem Punkt akzeptieren müssen).
- Prüfen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige davon unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Erwägen Sie, ein wenig zu warten, bevor Sie das Update akzeptieren: Oft werden Lieferkettenangriffe schnell von Sicherheitsexperten entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege einer Software-Stückliste

Um ein tieferes Verständnis Ihrer Abhängigkeiten zu erhalten, können Sie eine detaillierte Inventarisierung dieser pflegen. Dies wird als _Software-Stückliste_ (SBOM) bezeichnet.

Ein Lockfile ist eigentlich eine Art von SBOM: der Begriff "SBOM" bezieht sich jedoch in der Regel auf ein separates, standardisiertes Format zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als ein Lockfile. Das heißt:

- Sie können Abhängigkeiten erfassen, wie Webdienste, die nicht in einem Lockfile dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einem Lockfile dargestellt sind.

Das Verwenden eines Standardformats zur Darstellung einer SBOM bedeutet auch, dass Sie:

- Ihre SBOM mit Dritten teilen können
- Tools integrieren können, die Ihre SBOM zum Zweck der Einhaltung von Vorschriften oder zur Überwachung von Schwachstellen verstehen können.

Die beiden häufigsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder einen verwenden, um die SBOM für Ihr Projekt zu repräsentieren. SPDX war ursprünglich darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen konform sind, hat jedoch Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die von Software aufgerufen werden können, beispielsweise durch Endpunkt-URIs.

Jede Komponente und jeder Dienst, die/der im Produkt verwendet werden, sei es direkt oder indirekt, wird durch ein Objekt in der SBOM dargestellt. Das Objekt umfasst Informationen über den Artikel, einschließlich seines Namens, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Die SBOM listet auch die Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Menge von [CWE](https://cwe.mitre.org/index.html)-Codes, Minderungen, Links zu Empfehlungen und den Identifikatoren für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellung einer SBOM

Sie können eine SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/v11/commands/npm-sbom) generieren. Eine SBOM wird in der Regel als Teil des Build-Prozesses generiert, obwohl es auch möglich ist, sie in anderen Phasen des Softwarelebenszyklus zu generieren.

#### Verwendung einer SBOM

Eine SBOM ermöglicht Ihnen die Implementierung mehrerer Abwehrmaßnahmen gegen Lieferkettenangriffe, und wir listen hier drei wichtige auf:

- **Verwaltung von Schwachstellen**: Eine der Hauptanwendungen einer SBOM ist das Reagieren auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASP's [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen für Schwachstellenberichte, wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories), scannen.
- **Integritätsprüfung**: Wenn die SBOM Hashes für Abhängigkeiten enthält, ist es möglich, zu überprüfen, dass die Quelle der Komponente, von der Sie abhängig sind, nicht von ihrer ursprünglich veröffentlichten Form geändert wurde.
- **Lieferanten-Risikomanagement**: Indem Informationen über den Lieferanten Ihrer Abhängigkeiten erfasst werden, kann Ihnen eine SBOM helfen zu erkennen, wann Sie auf Komponenten oder Dienste von Lieferanten angewiesen sind, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: Am bekanntesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erhält, kann er das Skript durch ein bösartiges Skript ersetzen und somit Ihre Seite kompromittieren.

Externe Skripte sollten, wie andere Software-Abhängigkeiten, Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das Skript-Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es nicht laden und Sie werden geschützt.

Dies fügt jedoch eine zusätzliche Wartungsbelastung hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, jedes Mal, wenn eine neue Version veröffentlicht wird) müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt das `integrity`-Attribut ebenfalls, sodass Sie es (und sollten) für CSS-Stylesheets sowie Skripte verwenden.

Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Anfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und Minimieren der gewährten Berechtigungen.
- Bewertung der Werkzeuge, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind.
- Sicherstellung, dass Pull-Requests eine Überprüfung durchlaufen und {{Glossary("continuous_integration", "Continuous Integration")}} Prüfungen bestehen.
- Minimieren Ihrer Abhängigkeiten und Befolgen eines Prozesses zur Bewertung neuer Abhängigkeiten.
- Verwendung eines Lockfiles, um Updates Ihrer Abhängigkeiten zu kontrollieren, und Befolgen eines Prozesses zur Annahme von Updates.
- Erhaltung einer SBOM und Verwenden dieser zur Überprüfung von Schwachstellen.
- Verwenden von Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
