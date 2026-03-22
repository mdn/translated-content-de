---
title: Supply Chain-Angriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Eine _Software-Lieferkette_ besteht aus aller Software und allen Tools, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die Software, die für das Produkt selbst entwickelt wurde, sondern auch alle Software und Tools, die in seiner Produktion zum Einsatz kommen.

Bei einem Supply Chain-Angriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hier ist eine Drittanbieterbibliothek. Wenn Sie zum Beispiel ein [npm](https://www.npmjs.com/)-Paket verwenden, das von einem Drittanbieter entwickelt wurde, hat es die Möglichkeit, Ihre Seite zu kompromittieren. Dies kann absichtlich geschehen, falls es bösartig ist, oder unbeabsichtigt, wenn es eigene Sicherheitslücken enthält. Im Grunde müssen Sie Ihren Drittanbieterabhängigkeiten ebenso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Tools, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools und so weiter. Jedes dieser Tools könnte während der Transformationen, die sie anwenden, bösartigen oder fehlerhaften Code in Ihr finales Softwareprodukt einfügen.

In diesem Dokument skizzieren wir Praktiken, die befolgt werden sollten, um Ihre Software-Lieferkette abzusichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Absicherung Ihrer Entwicklungsumgebung](#absicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieterabhängigkeiten](#verwaltung_von_drittanbieterabhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Absicherung Ihrer Entwicklungsumgebung

Ein möglicher Weg für einen Supply Chain-Angriff ist, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugriffskontrollen

Implementieren Sie starke Zugriffskontrollen für alle, die am Projekt arbeiten, einschließlich aller Personen mit Schreibzugriff auf Ihr Code-Repository oder mit Berechtigungen zur Änderung der Build- oder Testkonfiguration. Gute Praktiken sind hier:

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgung des {{Glossary("principle_of_least_privilege", "Prinzips der minimalen Rechte")}}: Das bedeutet, dass Teammitgliedern nur die Privilegien gewährt werden, die sie benötigen, und die Anzahl der Teammitglieder, denen sehr mächtige Berechtigungen gewährt werden, aktiv minimiert wird.

### Absicherung von Tools

Bewerten Sie das Sicherheitsrisiko eines jeden Tools, das Sie in der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Tools, die an Ihren Build-, Test- und Bereitstellungsprozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Kompakten Leitfaden zur Bewertung von Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Absicherung Ihrer Konfiguration

Verstehen Sie die sicheren Einstellungen für Ihre Tools und wenden Sie diese an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Requests (PRs) vor dem Zusammenführen von einem Code-Eigentümer überprüft und genehmigt werden.
- Sicherstellen, dass PRs die {{Glossary("continuous_integration", "kontinuierlichen Integrations")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Sehen Sie die [Best Practices zur Plattformkonfiguration für das Quellcode-Verwaltungssystem](https://best.openssf.org/SCM-BestPractices/) der OpenSSF ein, die spezifische Checklisten für GitHub und GitLab enthält.

## Verwaltung von Drittanbieterabhängigkeiten

Drittanbieterabhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Tools, die im Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Tools.

Um Probleme mit Drittanbieterabhängigkeiten zu mindern, besprechen wir vier Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege eines _Software Bill of Materials_ (SBOM)
4. Verwenden von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie einschätzen, wie groß das Sicherheitsrisiko ist, das sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gewartet wird, dass sie Probleme behebt und einen Prozess zum Melden und Reagieren auf Sicherheitslücken bietet.

Sie sollten abwägen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten der eigenen Implementierung des Features überwiegt.

Der [Kompakte Leitfaden zur Bewertung von Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von der [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit in der Regel neue Versionen mit neuen Features, Bug-Fixes und Sicherheitsupdates veröffentlichen. Sie möchten in der Regel von diesen Updates profitieren, indem Sie einen Mechanismus implementieren, um die Abhängigkeit aktuell zu halten. Tools wie [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart-guide) von GitHub können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Das allzu eifrige Aktualisieren von Abhängigkeiten birgt jedoch eigene Risiken. Beispielsweise könnte ein Angreifer, wenn Sie eine Abhängigkeit von einem vertrauenswürdigen Drittanbieter-Paket hinzufügen, die Kontrolle über das Konto des Paketentwicklers erlangen und ein bösartiges Update veröffentlichen. Wenn Sie das Update sofort akzeptieren, ist Ihr Projekt kompromittiert.

#### Verwendung einer Sperrdatei

Der erste Schritt zur Absicherung von Abhängigkeitsupdates ist die Verwendung einer _Sperrdatei_ für Abhängigkeiten, diese in die Versionskontrolle einzuchecken und bei der Erstellung Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Anschließend können Sie einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie nutzen kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die exakte Version jedes Pakets: Wenn der Paketlieferant eine neue Version veröffentlicht, könnte sie automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Ist die neue Version der Abhängigkeit bösartig, könnte sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt bemerken.

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

Nehmen wir an, Ihr Projektbauprozess läuft automatisch, wenn Ihre Lieferanten neue Versionen veröffentlichen. Der Bauprozess startet den Build durch Aufrufen von `npm install`. Dies wird die neueste Version von "example-dependency" abrufen, abhängig vom Versionsbereich `"^1.0.2"`.

In Version `1.0.2`, zu dem Zeitpunkt, an dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3`-Version. Ihr Bauprozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist geschehen, ohne dass Änderungen an den direkten Artefakten Ihres Projekts vorgenommen wurden oder Ihnen die Möglichkeit gegeben wurde, das Update zu prüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung hierfür ist die Verwendung einer Sperrdatei beim Erstellen Ihres Projekts. Eine Sperrdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und sie listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann sagt Ihnen _package.lock_ genau, welche Version von "example-dependency" zu verwenden ist, und welche Versionen seiner Abhängigkeiten sind.

Die Sperrdatei Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Sperrdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: bei npm machen Sie dies mit [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install`.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Das bedeutet, dass Ihr Build-System zur Aktualisierung von Abhängigkeiten einen Pull-Request machen muss, um die Sperrdatei zu aktualisieren, und dies gibt Ihnen die Möglichkeit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Wenn Sie ein Update für eine Abhängigkeit prüfen, überlegen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Changelog für die Veröffentlichung, um zu verstehen, was es bietet (und ob Sie es zu diesem Zeitpunkt überhaupt akzeptieren müssen).
- Überprüfen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob eines davon unerklärlich ist oder nicht mit dem Changelog übereinstimmt.
- Erwägen Sie, ein wenig zu warten, bevor Sie aktualisieren: Häufig werden Supply Chain-Angriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege eines Software Bill of Materials

Um tiefere Einblicke in Ihre Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar von ihnen pflegen. Dies wird als _Software Bill of Materials_ (SBOM) bezeichnet.

Eine Sperrdatei ist im Grunde eine Art SBOM: Der Begriff "SBOM" bezieht sich jedoch normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Sperrdatei. Das heißt:

- Sie können Abhängigkeiten wie Webdienste erfassen, die nicht in einer Sperrdatei dargestellt sind.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Sperrdatei dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Drittparteien teilen können
- Tools integrieren können, die Ihr SBOM für Zwecke wie regulatorische Compliance oder Schwachstellenüberwachung verstehen können.

Die beiden gebräuchlichsten Standards zur Darstellung einer Software-Stückliste sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), verwaltet von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung und Sie können entweder verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX konzentrierte sich zunächst darauf, Produkten zu helfen, die Compliance mit Open-Source-Softwarelizenzen sicherzustellen, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an auf die Förderung der Supply Chain-Sicherheit ausgerichtet war.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, aber sind nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste stellen externe APIs dar, die Software aufrufen kann, zum Beispiel über Endpunkt-URIs.

Jede direkt oder indirekt im Produkt verwendete Komponente und jeder Dienst wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über den Artikel, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jeder Artikel auf der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Menge von [CWE](https://cwe.mitre.org/index.html)-Codes, Abmilderungen, Links zu Hinweisen und der Kennungen für die Komponenten oder Dienste, die von der Schwachstelle betroffen sind.

#### Erstellung eines SBOM

Sie können ein SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cdxgen.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) erstellen. Ein SBOM wird in der Regel als Teil des Build-Prozesses erstellt, obwohl es möglich ist, eines in anderen Phasen des Softwarelebenszyklus zu erstellen.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Verteidigungen gegen Supply Chain-Angriffe zu implementieren, und wir listen hier drei wichtige auf:

- **Schwachstellenmanagement**: Eine der Hauptanwendungen für ein SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Integritätsüberprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, auf die Sie sich stützen, nicht von ihrer ursprünglich veröffentlichten Form abgewichen ist.
- **Lieferanten-Risikomanagement**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie sich auf Komponenten oder Dienste von Lieferanten stützen, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites schließen extern gehostete Skripte ein: am bemerkenswertesten, aber nicht ausschließlich, sind dies Skripte, die von einem {{Glossary("CDN", "Content-Delivery-Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und damit Ihre Seite kompromittieren.

Externe Skripte, wie andere Software-Abhängigkeiten, sollten Teil Ihres SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das Attribut [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) des Skripts festzulegen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer geändert wurde, wird der Browser sich weigern, es zu laden, und Sie werden geschützt.

Dies bedeutet eine zusätzliche Wartungsbelastung: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, wenn eine neue Version veröffentlicht wird), müssen Sie den Attributswert in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es sowohl für CSS-Stile als auch für Skripte verwenden können und sollten.

Weitere Einzelheiten finden Sie unter [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

## Zusammenfassung der Verteidigungscheckliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie die gewährten Berechtigungen.
- Bewerten Sie die Tools, die in Ihrem Build-, Test- und Bereitstellungsprozess beteiligt sind.
- Stellen Sie sicher, dass Pull-Requests überprüft und bestandene {{Glossary("continuous_integration", "kontinuierliche Integrations")}}-Prüfungen durchlaufen.
- Minimieren Sie Ihre Abhängigkeiten und befolgen Sie einen Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Sperrdatei, um Updates Ihrer Abhängigkeiten zu steuern, und befolgen Sie einen Prozess zur Annahme von Updates.
- Pflegen Sie ein SBOM und nutzen Sie es, um Schwachstellen zu prüfen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) - Ein zentrales Zentrum für Sicherheitsleitlinien und -ressourcen für das JavaScript-Ökosystem, einschließlich:
  - [SBOM und Herausforderungen der Supply Chain-Sicherheit](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Empfehlungen für JavaScript SBOM und Softwarebescheinigung
  - [Sicherheitskonformitätsrichtlinien](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - Eine umfassende Checkliste für die betriebliche Sicherheit
  - [npm Sicherheitsbest-Practice-Leitfaden](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) - Best Practices zur Sicherung von npm-Paketen und -Abhängigkeiten
  - [Leitfaden für sichere Releases](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) - Leitlinien zur Erstellung sicherer Software-Releases
