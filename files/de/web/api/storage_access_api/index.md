---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für plattformübergreifende Inhalte, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die sie normalerweise nur in einem Erstanbieter-Kontext zugreifen könnten (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist relevant für User Agents, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir auch mit diesen Standardbeschränkungen ermöglichen möchten. Beispiele sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs), oder das Speichern von Benutzerdaten wie Standortinformationen oder Vorlieben über verschiedene Websites hinweg.

Die API bietet Methoden, mit denen eingebettete Ressourcen überprüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und, falls nicht, den Zugriff beim User Agent anfordern können.

## Konzepte und Nutzung

Browser implementieren verschiedene Speicherzugriffsmerkmale und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Zuweisung eines eindeutigen Cookie-Speicherplatzes für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik bezüglich der Blockierungsfunktionen und -richtlinien für Drittanbieter-Cookies und unpartitionierten Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Plattformübergreifende Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten nicht denselben Zugriff auf den Zustand, den sie hätten, wenn sie in einem Erstanbieter-Kontext geladen würden. Dies geschieht aus gutem Grund — Browser-Anbieter möchten Schritte unternehmen, um die Privatsphäre und Sicherheit der Nutzer besser zu schützen. Beispiele sind, sie weniger offen dafür zu lassen, dass ihre Aktivitäten über verschiedene Websites hinweg verfolgt werden, und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) zu machen.

Es gibt jedoch legitime Anwendungen für eingebettete plattformübergreifende Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen, die die oben genannten Funktionen und Richtlinien bekanntermaßen beeinträchtigen. Nehmen wir an, Sie haben eine Reihe von verschiedenen Websites, die Zugang zu verschiedenen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedene Länderdomains für Lokalisierungszwecke trennen — `example.com`, `example.ua`, `example.br` usw. — oder auf eine andere Weise.

Möglicherweise haben Sie begleitende Utility-Websites mit Komponenten, die in alle anderen Websites eingebettet sind, um beispielsweise SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Utility-Websites möchten ihren Zustand über Cookies mit den Websites teilen, in denen sie eingebettet sind. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die sie blockieren.

In solchen Situationen ermutigen Website-Besitzer oft die Nutzer, ihre Website als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, erheblich lockern und möglicherweise sogar über alle Websites hinweg.

Die Storage Access API ist dazu gedacht, dieses Problem zu lösen; eingebettete plattformübergreifende Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) unbeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand auf Basis einzelner Frames anfordern. Sie kann auch überprüfen, ob der Zugriff bereits besteht, indem sie die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) verwenden.

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu ermöglichen. Das bedeutet Cookies, die auf traditionelle Weise seit den Anfängen des Webs gespeichert werden — alle Cookies, die auf derselben Website gesetzt werden, werden im selben Cookie-Behälter gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen einzigartigen Cookie-Speicherplatz erhalten, wodurch es unmöglich wird, Nutzer über diese Cookies hinweg zu verfolgen.

Browser haben verschiedene Mechanismen zur Partitionierung des Zugriffs auf Drittanbieter-Cookies, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand haben, können den Zugriff mit der Storage Access API wie folgt anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob der erforderliche Zugriff bereits besteht.
2. Falls nicht, kann der Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) angefordert werden.
3. Abhängig vom Browser wird der Nutzer in unterschiedlichster Weise gefragt, ob er dem anfragenden embed Zugriff gewähren möchte.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die bisher keinen Speicherzugriff erhalten haben.
   - Firefox zeigt Nutzern erst dann Eingabeaufforderungen, nachdem ein Ursprung auf mehr als einer bestimmten Anzahl von Seiten Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte an, die bisher keinen Speicherzugriff erhalten haben. Es wird allerdings automatisch Zugriff gewährt und Eingabeaufforderungen übersprungen, wenn das eingebettete und das einbettende Site Teil desselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browser-spezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}}-basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code zu schreiben, um Erfolgs- und Fehlerfälle zu behandeln.
   - Modernes Spezifikationsverhalten gibt vor, dass der Zugang _pro Frame_ gewährt wird — jedes separate Inhalte-Embed hat seinen Drittanbieter-Cookie-Zugriff standardmäßig blockiert und muss `requestStorageAccess()` aufrufen, um sich für den Zugriff zu entscheiden. Wenn ein Inhalte-Embed Zugriff erhält und gleiche Site-Embeds dann `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Aber sie müssen trotzdem optieren.
   - Die einzige Ausnahme zu dem "standardmäßig blockierten" Verhalten ist, wenn ein Inhaltsembed ein erfolgreiches `requestStorageAccess()` macht, sich dann jedoch einer Navigation gleichen Ursprungs unterzieht (z. B. sich selbst neu lädt). In solchen Fällen wird der Speichzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen wurde der Zugriff _pro Seite_ gewährt (Safari ist der einzige Browser, der noch dieses Modell verwendet). Wenn ein Embed Zugriff auf Drittanbieter-Cookies über `requestStorageAccess()` erhielt, erhielten alle anderen Embeds der gleichen Site automatisch Zugriff. Dies war aus Sicherheitsgründen kein erwünschtes Verhalten — wenn zum Beispiel `shop.example.com` `locator.users.com` einbettete, um Nutzern zu erlauben, ihre Standortinformationen zu verwenden, während sie einkaufen, und `locator.users.com` `requestStorageAccess()` aufrief, würden `shop.example.com` und jede andere eingebettete Site darauf Zugriff auf seine Cookies haben, aber auch Zugriff auf Cookies von `private.users.com`, die nicht zum Einbetten vorgesehen ist. [Mehr zu den Beweggründen lesen](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt ist, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<Top-Level-Site, eingebettete Site>` gespeichert. Wenn die einbettende Seite `embedder.com` ist und das Embed `locator.example.com` ist, wäre der Schlüssel beispielsweise `<embedder.com, example.com>`. Gleichseitige Embeds (`docs.example.com`, `profile.example.com`, etc.) könnten dann `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt, wie bereits erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass gleichseitige, vielerlei Ursprungs-Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den ganzen Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Datenschutzrisiko birgt.

## Sicherheitsmaßnahmen

Mehrere verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die untenstehende Liste, wenn Sie Schwierigkeiten haben, eine Anforderung zum Laufen zu bringen:

1. Der Aufruf muss mit einer Benutzeraktion ({{Glossary("transient_activation", "transient activation")}}) wie einem Tipp oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder den Benutzer mit übermäßigen Zugriffsanforderungen bombardieren. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits erteilt wurde, zum Beispiel durch einen anderen gleichseitigen Ressource, die `requestStorageAccess()` aufruft.
   - Der Anrufer ein Top-Level-Dokument oder gleichseitig mit dem Top-Level-Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich gar nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, die noch nie als Erstanbieter agiert haben, haben kein Konzept für Erstanbieter-Speicherung. Aus Sicht des Benutzers haben sie nur eine Drittanbieter-Beziehung zu diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser feststellt, dass der Nutzer nicht kürzlich in einem Erstanbieter-Kontext mit dem eingebetteten Inhalt interagiert hat (in Firefox bedeutet "kürzlich" im Allgemeinen innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugang erhalten. Daher fügt die API auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um Speicherzugriffsanforderungen erfolgreich zu haben, zusammen mit `allow-scripts` und `allow-same-origin`, um ihnen das Ausführen eines Skripts zur Aufrufs-API und seine Ausführung in einem Ursprung zu ermöglichen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine auf Ihrem Server festgelegte {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

> [!NOTE]
> Das Dokument kann auch erforderlich sein, zusätzliche browserspezifische Prüfungen zu bestehen. Beispiele: Whitelists, Blacklists, Geräteklassifikation, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Einholen der expliziten Erlaubnis des Benutzers.

## Browserspezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede in der Ebene und dem Ausmaß des Zugriffs auf Drittanbieter-Cookies erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in ihren Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) explizit auf sie gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsgenehmigungen werden nach 30 Tagen der Browsernutzung ohne Benutzerinteraktion ausgephased. Die Interaktion mit dem eingebetteten Inhalt verlängert diese Grenze nochmals um 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits auf dem Top-Level-Ursprung `foo.example` Zugriff auf Drittanbieter-Cookies erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut innerhalb von weniger als 30 Tagen einbettet, hat der eingebettete Ursprung sofortigen Zugriff auf Drittanbieter-Cookies beim Laden.
- Die Speicherzugriffsgenehmigungen werden nach 30 Kalendertagen ausgephased.

Die Dokumentation über die neue Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsgenehmigungen.

### Safari

- Die Speicherzugriffsgenehmigungen werden nach 30 Tagen der Browsernutzung ohne Benutzerinteraktion ausgephased. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für eine Implementierungsanleitung mit Code-Beispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem boolean-Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht Inhalten, die in einem Drittanbieter-Kontext geladen werden (d.h. in einem {{htmlelement("iframe")}} eingebettet sind), den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zu beantragen; gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Erweiterung zu der Storage Access API, die es Top-Level-Sites ermöglicht, Zugriff auf Drittanbieter-Cookies im Namen von eingebetteten Inhalten anzufordern, die von einer anderen Site im gleichen [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Die Benutzerinteraktion propagiert sich auf das von diesen Methoden zurückgegebene Versprechen, wodurch den Aufrufern ermöglicht wird, Aktionen zu ergreifen, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Beispielsweise könnte ein Aufrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Funktionsname
  - : In unterstützenden Browsern kann abgefragt werden, ob im Allgemeinen Zugriff auf Drittanbieter-Cookies gewährt wurde, das heißt, einem anderen gleichseitigen Embed. Wenn dies der Fall ist, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"` Funktionsname {{experimental_inline}}
  - : Ein separater Funktionsname, der verwendet wird, um abzufragen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn dies der Fall ist, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
