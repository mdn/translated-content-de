---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Eine _Software-Lieferkette_ besteht aus der gesamten Software und den Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Software und Werkzeuge, die bei der Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hier ist eine Drittanbieterbibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/) Paket eines Drittanbieters verwenden, hat es die Möglichkeit, Ihre Website zu kompromittieren. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es eigene unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Tools könnte während der von ihnen angewandten Transformationen bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, die Sie befolgen sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte unterteilt:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, die dazu beitragen, sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwalten von Drittanbieter-Abhängigkeiten](#verwalten_von_drittanbieter-abhängigkeiten): Praktiken, die dazu beitragen, sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einbringt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugriffskontrollen

Implementieren Sie starke Zugriffskontrollen für alle, die an dem Projekt arbeiten, einschließlich aller, die Schreibzugriff auf Ihr Code-Repository oder Berechtigungen zur Änderung der Build- oder Testkonfiguration haben. Gute Praktiken in diesem Bereich umfassen:

- Anforderung von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgung des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechtevergabe")}}: das bedeutet, Teammitgliedern nur die Rechte zu geben, die sie benötigen, und die Anzahl der Teammitglieder, die sehr mächtige Berechtigungen erhalten, aktiv zu minimieren.

### Sicherung von Tools

Bewerten Sie das Sicherheitsrisiko aller Werkzeuge, die Sie bei der Herstellung Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Quellkontrollsysteme
- Alle Werkzeuge, die in Ihren Build-, Test- und Bereitstellungsprozessen verwendet werden

Für Open-Source-Software-Abhängigkeiten können Sie den [Kompakten Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen Sie die sicheren Einstellungen für Ihre Tools und wenden Sie sie an, insbesondere für Ihr Quellkontrollsystem. Die wichtigsten Schutzmaßnahmen sind:

- Sicherstellen, dass Pull Requests (PRs) vor dem Zusammenführen von einem Code-Eigentümer überprüft und ausdrücklich genehmigt werden.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}} Checks bestehen, bevor sie zusammengeführt werden können.
- Anforderungen, dass Commits signiert sind.

Sehen Sie sich die [Best Practices für die Konfiguration von Quellcode-Verwaltungsplattformen](https://best.openssf.org/SCM-BestPractices/) der OpenSSF an, die spezifische Checklisten für GitHub und GitLab enthalten.

## Verwalten von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Tools, die im Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Quellkontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, werden wir vier Praktiken besprechen:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege eines _Software Bill of Materials_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie abschätzen, welches Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass es eine Historie der Problemlösung gibt und einen Prozess zum Melden und Beheben von Sicherheitslücken.

Sie sollten erwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten der selbstständigen Implementierung der Funktion überwiegt.

Der [Kompakte Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie sich stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitsfixes veröffentlichen. Sie werden in der Regel von diesen Updates profitieren wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit aktuell zu halten. Tools wie der [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) von GitHub können hierbei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull Requests eröffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt das allzu eilige Aktualisieren von Abhängigkeiten eigene Risiken. Zum Beispiel nehmen wir an, Sie fügen eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer erlangt dann die Kontrolle über das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt kompromittiert.

#### Verwendung einer Sperrdatei

Der erste Schritt zur Sicherung von Abhängigkeitsupdates besteht darin, eine _Sperrdatei_ für Abhängigkeiten zu verwenden, diese in die Quellkontrolle einzuchecken und beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die genaue Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es erstellt wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt bemerken.

Beispielsweise nehmen wir an, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, Ihr Projekt-Build-Prozess wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Build-Prozess startet den Build, indem `npm install` aufgerufen wird. Dies ruft die neueste Version von "example-dependency" ab, vorbehaltlich des Versionsbereichs `"^1.0.2"`.

In Version `1.0.2`, dem Zeitpunkt, an dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess läuft, installiert das bösartige Paket und Sie sind kompromittiert.

All dies ist geschehen, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden, oder dass Ihnen die Möglichkeit gegeben wurde, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung hierfür besteht darin, eine Sperrdatei zu verwenden, wenn Sie Ihr Projekt erstellen. Eine Sperrdatei wird automatisch generiert, wenn die Abhängigkeiten eines Projekts installiert werden, und listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das bedeutet, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-project" verwendet, dann sagt Ihnen die _package.lock_ Datei genau, welche Version von "example-project" zu verwenden ist und welche Versionen seiner Abhängigkeiten sind.

Die Sperrdatei Ihres Projekts sollte in die Quellkontrolle eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Sperrdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Versionsfixierung" bezeichnet.

Das bedeutet, dass Ihr Build-System einen Pull-Request erstellen muss, um die Sperrdatei zu aktualisieren, und das gibt Ihnen die Chance, das Update zu überprüfen und sicherzustellen, dass Sie es annehmen möchten.

#### Überprüfung von Updates

Wenn Sie ein Update einer Abhängigkeit überprüfen, überlegen Sie, ob es sich um ein Update handelt, das Sie akzeptieren möchten:

- Lesen Sie das Changelog für die Veröffentlichung, um zu verstehen, was sie beansprucht anzubieten (und ob Sie sie überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Prüfen Sie, ob neue zusätzliche Abhängigkeiten eingeführt werden.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einer von ihnen unerklärlich ist oder nicht mit dem Changelog übereinstimmt.
- Ziehen Sie in Betracht, eine Weile zu warten, bevor Sie das Update durchführen: Häufig werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig befunden wird, bevor Sie es akzeptiert haben.

### Pflege eines Software Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar davon führen. Dies wird als _Software Bill of Materials_ (SBOM) bezeichnet.

Eine Sperrdatei ist wirklich eine Art von SBOM: jedoch bezieht sich der Begriff "SBOM" normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind normalerweise sowohl breiter als auch tiefer als eine Sperrdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie z.B. Webdienste, die nicht in einer Sperrdatei dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Sperrdatei dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung einer SBOM bedeutet auch, dass Sie:

- Ihre SBOM mit Dritten teilen können
- Tools integrieren können, die Ihre SBOM für Zwecke wie regulatorische Compliance oder Schwachstellenüberwachung verstehen können.

Die beiden am häufigsten verwendeten Standards zur Darstellung eines Software-Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben eine gute Unterstützung und Sie können entweder verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf ausgerichtet, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Software-Lizenzen konform sind, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie einer SBOM

> [!NOTE]
> In diesem Abschnitt werden wir CycloneDX als konkretes Beispiel für ein SBOM-Format verwenden.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, auf die die Software zugreifen kann, zum Beispiel durch Endpunkt-URIs.

Jede im Produkt verwendete Komponente und jeder Dienst, entweder direkt oder indirekt, wird durch ein Objekt in der SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Die SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich der Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html) Codes, Gegenmaßnahmen, Links zu Hinweisen und den Identifikatoren für Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellung einer SBOM

Sie können eine SBOM für ein Produkt mithilfe eines separaten Tools wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder eines Befehls wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) generieren. Eine SBOM wird normalerweise im Rahmen des Build-Prozesses generiert, obwohl es möglich ist, sie in anderen Phasen des Softwarelebenszyklus zu erzeugen.

#### Verwendung einer SBOM

Eine SBOM ermöglicht es Ihnen, mehrere Abwehrmaßnahmen gegen Lieferkettenangriffe umzusetzen, und wir werden hier drei wichtige davon aufzählen:

- **Schwachstellenmanagement**: Eine der Hauptanwendungen für eine SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Tools von Drittanbietern wie das [Dependency-Track](https://dependencytrack.org/) von OWASP verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten durchsuchen, wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories).
- **Integritätsüberprüfung**: Wenn die SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglichen freigegebenen Form modifiziert wurde.
- **Lieferanten-Risikomanagement**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann eine SBOM Ihnen helfen zu verstehen, wann Sie sich auf Komponenten oder Dienste von Lieferanten verlassen, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites enthalten extern gehostete Skripte: am bemerkenswertesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangen kann, kann er das Skript durch ein bösartiges Skript ersetzen und dadurch Ihre Website kompromittieren.

Externe Skripte, wie andere Software-Abhängigkeiten, sollten Teil Ihrer SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptographischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser sich weigern, es zu laden, und Sie werden geschützt.

Dies erhöht jedoch den Wartungsaufwand: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel jedes Mal, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}} Element unterstützt auch das `integrity` Attribut, sodass Sie es auch für CSS-Stylesheets sowie Skripte verwenden sollten.

Weitere Einzelheiten finden Sie unter [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).

## Zusammenfassende Verteidigungscheckliste

- Multi-Faktor-Authentifizierung für Teammitglieder erfordern und gewährte Berechtigungen minimieren.
- Werkzeuge bewerten, die in Ihren Build-, Test- und Bereitstellungsprozessen involviert sind.
- Sicherstellen, dass Pull Requests überprüft werden und {{Glossary("continuous_integration", "Continuous Integration")}} Checks bestehen.
- Ihre Abhängigkeiten minimieren und einen Prozess zur Bewertung neuer Abhängigkeiten verwenden.
- Eine Sperrdatei verwenden, um Updates Ihrer Abhängigkeiten zu kontrollieren, und einen Prozess zur Annahme von Updates befolgen.
- Eine SBOM pflegen und verwenden, um nach Schwachstellen zu suchen.
- Subresource Integrity für extern referenzierte Skripte und Stylesheets verwenden.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
