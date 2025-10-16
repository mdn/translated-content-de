---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 1fa75884f80bc73613889fca41ca21fd984b2a9e
---

Eine _Software-Lieferkette_ besteht aus allen Software- und Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dies umfasst nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Werkzeuge, die bei seiner Produktion eingesetzt werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hierfür ist eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket verwenden, das von einem Drittanbieter entwickelt wurde, hat es die Möglichkeit, Ihre Website zu gefährden. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten ebenso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt das gleiche Prinzip für alle Tools, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsysteme, Build-Tools usw. Jedes dieser Tools könnte während der von ihnen durchgeführten Transformationen bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, die Sie befolgen sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptteile gegliedert:

- [Absicherung Ihrer Entwicklungsumgebung](#absicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieter-Abhängigkeiten](#verwaltung_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Absicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff ist, dass ein Angreifer direkt Schwachstellen oder bösartigen Code in Ihr eigenes Produkt einführt. In diesem Abschnitt werden wir einige Praktiken beschreiben, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugangskontrollen

Implementieren Sie starke Zugangskontrollen für alle, die an dem Projekt arbeiten, einschließlich jeder Person mit Schreibzugriff auf Ihr Code-Repository oder mit den Berechtigungen, die Build- oder Testkonfiguration zu ändern. Gute Praktiken hier umfassen:

- Erfordernis von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgen des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechtevergabe")}}: Das bedeutet, Teammitgliedern nur die Privilegien zu geben, die sie benötigen, und aktiv die Anzahl der Teammitglieder zu minimieren, denen sehr mächtige Berechtigungen erteilt werden.

### Absicherung von Tools

Bewerten Sie das Sicherheitsrisiko der Tools, die Sie bei der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die in Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Absicherung Ihrer Konfiguration

Verstehen und wenden Sie sichere Einstellungen für Ihre Tools an, insbesondere Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Requests (PRs) von einem Code-Eigentümer überprüft und ausdrücklich genehmigt werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordernis, dass Commits signiert sind.

Siehe die OpenSSF's [Best Practices für die Konfigurationsplattform des Quellcode-Managements](https://best.openssf.org/SCM-BestPractices/), die spezifische Checklisten für GitHub und GitLab enthalten.

## Verwaltung von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die im Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten abzumildern, werden wir vier Praktiken diskutieren:

1. Evaluierung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege einer _Software-Stückliste_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Evaluierung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie beurteilen, wie groß das Sicherheitsrisiko ist, das sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie eine Historie zur Behebung von Problemen und einen Prozess zur Meldung und Reaktion auf Sicherheitsrisiken hat.

Sie sollten abwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten für die eigenständige Implementierung der Funktion überwiegt.

Der [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Bugfixes und Sicherheitsfixes veröffentlichen. Sie werden in der Regel davon profitieren wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings beinhaltet das zu eifrige Aktualisieren von Abhängigkeiten eigene Risiken. Angenommen, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Dann erlangt ein Angreifer Zugang zum Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt gefährdet.

#### Verwendung einer Sperrdatei

Der erste Schritt zur Sicherung von Abhängigkeitsaktualisierungen ist die Verwendung einer _Sperrdatei_ für Abhängigkeiten. Diese sollte in die Versionskontrolle aufgenommen und beim Erstellen Ihres Projekts verwendet werden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, sodass das Projekt sie verwenden kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, könnte diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, könnte sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie dessen bewusst sind.

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

Angenommen, der Buildprozess Ihres Projekts wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Buildprozess startet den Build, indem er `npm install` aufruft. Dies ruft die neueste Version von "example-dependency" ab, vorbehaltlich der Versionsbereich `"^1.0.2"`.

Bei Version `1.0.2`, dem Zeitpunkt, an dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, gutartiges Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3` Version. Ihr Buildprozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All das ist ohne Änderungen an den direkten Artefakten Ihres Projekts geschehen, oder ohne Gelegenheit für Sie, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür besteht darin, eine Sperrdatei bei der Erstellung Ihres Projekts zu verwenden. Eine Sperrdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" zu verwenden ist und welche Versionen seiner Abhängigkeiten bestehen.

Die Sperrdatei Ihres Projekts sollte in die Versionskontrolle aufgenommen werden. Bei der Erstellung Ihres Projekts sollten Sie die Sperrdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Das bedeutet, dass Ihr Buildsystem einen Pull-Request stellen muss, um die Sperrdatei zu aktualisieren, und dies gibt Ihnen die Möglichkeit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfen von Updates

Wenn Sie ein Update einer Abhängigkeit überprüfen, überlegen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Changelog für die Veröffentlichung, um zu verstehen, was es angeblich bietet (und ob Sie es an diesem Punkt überhaupt akzeptieren müssen).
- Sehen Sie nach, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie nach, ob einige davon unerklärlich sind oder nicht mit dem Changelog übereinstimmen.
- Ziehen Sie in Betracht, ein wenig zu warten, bevor Sie aktualisieren: Oft werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig identifiziert wird, bevor Sie es akzeptiert haben.

### Pflege einer Software-Stückliste

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie eine detaillierte Inventur von ihnen pflegen. Dies wird als eine _Software-Stückliste_ (SBOM) bezeichnet.

Eine Sperrdatei ist wirklich eine Art von SBOM: jedoch bezieht sich der Begriff "SBOM" normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind normalerweise sowohl breiter als auch tiefer als eine Sperrdatei. Das bedeutet:

- Sie können Abhängigkeiten erfassen, wie etwa Webdienste, die nicht in einer Sperrdatei repräsentiert sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Sperrdatei enthalten sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Tools integrieren können, die Ihr SBOM zum Zwecke der Einhaltung von Vorschriften oder Schwachstellenüberwachung verstehen können.

Die beiden gebräuchlichsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder verwenden, um das SBOM für Ihr Projekt zu repräsentieren. SPDX war anfangs darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen konform sind, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe die CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software möglicherweise aufruft, beispielsweise über Endpunkt-URIs.

Jede Komponente und jeder Dienst, der direkt oder indirekt im Produkt verwendet wird, wird durch ein Objekt im SBOM repräsentiert. Das Objekt enthält Informationen über das Element, einschließlich Name, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einem Satz von [CWE](https://cwe.mitre.org/index.html)-Codes, Milderungen, Links zu Hinweisen und die Bezeichner für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellung eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Ein SBOM wird normalerweise als Teil des Build-Prozesses generiert, obwohl es möglich ist, es in anderen Phasen des Software-Lebenszyklus zu generieren.

#### Verwendung eines SBOM

Ein SBOM ermöglicht Ihnen die Implementierung mehrerer Abwehrmaßnahmen gegen Lieferkettenangriffe, und wir werden hier drei wichtige erwähnen:

- **Schwachstellenmanagement**: Eine der Hauptverwendungen für ein SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Tools von Drittanbietern wie OWASP's [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) scannen.
- **Integritätsüberprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, ob die Quelle der Komponente, auf die Sie sich verlassen, nicht von ihrer ursprünglich freigegebenen Form geändert wurde.
- **Lieferantenrisikomanagement**: Durch die Erfassung von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie auf Komponenten oder Dienste von Lieferanten angewiesen sind, die nicht mehr als zuverlässig angesehen werden.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: vor allem, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und so Ihre Website kompromittieren.

Externe Skripte sollten, wie andere Software-Abhängigkeiten, Teil Ihres SBOM sein, aber eine zusätzliche Verteidigung ist, das `integrity`-Attribut des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptographischen Hash")}} der Inhalte des Skripts. Wenn das Skript von einem Angreifer geändert wurde, wird der Browser sich weigern, es zu laden, und Sie werden geschützt.

Dies fügt jedoch eine zusätzliche Wartungslast hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es (und sollten) sowohl für CSS-Stylesheets als auch für Skripte verwenden.

Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie gewährte Berechtigungen.
- Bewerten Sie die Tools, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind.
- Sicherstellen, dass Pull-Requests überprüft werden und {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und befolgen Sie einen Prozess zur Evaluierung neuer Abhängigkeiten.
- Verwenden Sie eine Sperrdatei, um Updates Ihrer Abhängigkeiten zu kontrollieren, und befolgen Sie einen Prozess zur Annahme von Updates.
- Pflegen Sie ein SBOM und verwenden Sie es, um nach Schwachstellen zu suchen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
