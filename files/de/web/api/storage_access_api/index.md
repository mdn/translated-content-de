---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für Cross-Site-Inhalte, die in einem Drittanbieter-Kontext geladen werden (z.B. eingebettet in einem {{htmlelement("iframe")}}), um Zugang zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zuständen](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) zu erhalten, auf die sie typischerweise nur in einem Erstanbieter-Kontext (z.B. beim direkten Laden in einem Browser-Tab) zugreifen könnten.

Die Storage Access API ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (z.B. um Tracking zu verhindern). Es gibt legitime Verwendungszwecke für Drittanbieter-Cookies und unpartitionierten Zustand, die auch mit diesen Standardeinschränkungen ermöglicht werden sollen. Beispiele beinhalten Single-Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder die Speicherung von Benutzerdaten wie Standortdaten oder Anzeigepräferenzen über verschiedene Seiten hinweg.

Die API stellt Methoden bereit, die eingebetteten Ressourcen ermöglichen zu überprüfen, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben und, falls nicht, um Zugriff beim Benutzeragenten zu bitten.

## Konzepte und Nutzung

Browser implementieren mehrere Speicherzugriffs-Features und -Richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) für eingebettete Ressourcen unter jedem Top-Level-Ursprung bis zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik rund um Drittanbieter-Cookie- und unpartitionierte Zustandsblockierungsfeatures und -Richtlinien unterscheiden sich von Browser zu Browser, aber die Kernfunktionen sind ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, haben keinen Zugriff auf denselben Zustand, auf den sie beim Laden in einem Erstanbieter-Kontext zugreifen könnten. Dies geschieht in guter Absicht – Browser-Anbieter möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele hierfür sind, sie weniger angreifbar für Tracking ihrer Aktivitäten über verschiedene Sites hinweg zu machen und sie weniger anfällig für Exploits wie Cross-Site-Request-Forgery ([CSRF](/de/docs/Glossary/CSRF)) zu machen.

Es gibt jedoch legitime Verwendungen für eingebettete Cross-Site-Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Zustand zugreifen möchten, die durch die oben genannten Features und Richtlinien beeinträchtigt werden. Nehmen wir an, Sie haben eine Reihe unterschiedlicher Sites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com`, und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedene Länderdomains für Lokalisierungszwecke aufteilen — `example.com`, `example.ua`, `example.br`, etc. — oder auf andere Weise.

Sie könnten begleitende Dienstleistungsseiten mit Komponenten haben, die in alle anderen Sites eingebettet sind, beispielsweise um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstleistungsseiten möchten ihren Zustand mit den Sites, in die sie eingebettet sind, über Cookies teilen. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf verschiedenen Domains befinden, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die sie blockieren.

In solchen Situationen ermutigen Site-Besitzer oft, ihre Site als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien komplett zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinien für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden und möglicherweise über alle Websites hinweg, erheblich lockern.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können auf Frame-für-Frame-Basis uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern. Sie können auch überprüfen, ob sie bereits Zugriff haben, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies bereitzustellen. Dies bedeutet Cookies, die auf die traditionelle Weise seit dem frühen Web gespeichert werden — alle Cookies, die auf derselben Site gesetzt werden, werden im selben Cookie-Glas gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Site einen eindeutigen Cookie-Speicherplatz erhalten und somit ein Tracking der Nutzer über diese Cookies hinweg unmöglich machen.

Browser haben verschiedene Mechanismen zur Partitionierung des Zugriffs auf Drittanbieter-Cookies, z.B. [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Zusammenhang mit der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Wie es funktioniert

Eingebettete Inhalte, die einen legitimen Bedarf an Drittanbieter-Cookie- oder unpartitioniertem Zustand-Zugriff haben, können den Zugriff mit der Storage Access API wie folgt anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu überprüfen, ob sie bereits den benötigten Zugriff haben.
2. Wenn nicht, können sie Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
3. Je nach Browser wird der Nutzer auf leicht unterschiedliche Weise gefragt, ob er dem anfragenden eingebetteten Inhalt Zugriff gewähren möchte.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die bisher keinen Speicherzugriff erhalten haben.
   - Firefox fordert Nutzer nur auf, nachdem ein Ursprung Speicherzugriff auf mehr als einer Schwellenwertanzahl von Sites angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die bisher keinen Speicherzugriff erhalten haben. Es gewährt jedoch automatisch Zugriff und überspringt die Eingabeaufforderungen, wenn der eingebettete Inhalt und die einbettende Site Teil desselben [verwandten Websitesets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.
4. Der Zugriff wird gewährt oder verweigert, basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt – sehen Sie [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browser-spezifische Varianten](#browser-spezifische_varianten) für einige browser-spezifische Sicherheitsanforderungen. Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` erlaubt es Ihnen, Code auszuführen, um Erfolgs- und Fehlschläge zu behandeln.
   - Das moderne Spezifikationsverhalten diktiert, dass der Zugriff _pro Rahmen_ gewährt wird — jede separate Inhaltsembed hat standardmäßig auf Drittanbieter-Cookie-Zugriff blockiert und muss `requestStorageAccess()` aufrufen, um sich für den Zugriff zu entscheiden. Wenn ein Inhaltsembed Zugriff erhalten hat und gleichartige Embeds anschließend `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Aber sie müssen sich dennoch entscheiden.
   - Die einzige Ausnahme von dem "standardmäßig blockiert" Verhalten ist, wenn ein Inhaltsembed erfolgreich `requestStorageAccess()` ausführt, sich dann aber eine gleichursprüngige Navigation (z.B. durch Neuladen) durchführt. In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed Zugriff auf Drittanbieter-Cookies über `requestStorageAccess()` erhielt, erhielten alle anderen gleichartigen Embeds automatisch Zugriff. Dies war aus Sicherheitssicht nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` eingebettet hat, um Nutzern zu ermöglichen, ihre Standortinformationen während des Einkaufs zu nutzen, und `locator.users.com` `requestStorageAccess()` aufrief, `shop.example.com` und alle anderen eingebetteten Sites hätten Zugriff auf seine Cookies und könnten auch Cookies von `private.users.com` zugreifen, was nicht als eingebetteten Inhalt vorgesehen ist. [Lesen Sie mehr über die Motivationen](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Wenn der Zugriff gewährt wird, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, eingebettete Seite>` gespeichert. Zum Beispiel, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`. Gleichartige Embeds (`docs.example.com`, `profile.example.com`, etc.) könnten `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt, wie bereits erwähnt.
   - Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, eingebetteter Ursprung>`, was bedeutete, dass gleichartige, aber verschiedene Ursprünge die Berechtigungsschlüssel nicht erfüllten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Datenschutzrisiko darstellt.

## Sicherheitsmaßnahmen

Mehrere unterschiedliche Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die nachstehende Liste, wenn Sie Probleme haben, einen Antrag erfolgreich zu machen:

1. Der Aufruf muss mit einer Benutzerinteraktion ([transiente Aktivierung](/de/docs/Glossary/transient_activation)) wie einem Tap oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanforderungen bombardieren. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API bereits gewährt wurde, z.B. durch einen anderen gleichartigen Ressourcenaufruf von `requestStorageAccess()`.
   - Der Anrufer ein Top-Level-Dokument oder gleichartig zu diesem Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Origin haben.
3. Ursprünge, die noch nie als erste Partei interagiert haben, haben keinen Begriff von Erstanbieter-Speicher. Aus der Sicht des Nutzers haben sie nur eine Drittanbieter-Beziehung zu diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer nicht kürzlich mit dem eingebetteten Inhalt in einem Erstanbieter-Kontext interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxierte {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dies hinzufügen, um Speicherzugriffsanforderungen erfolgreich zu machen, zusammen mit `allow-scripts` und `allow-same-origin`, um das Ausführen eines Skripts zum Aufrufen und Ausführen der API in einem Ursprung zu ermöglichen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert sein, die auf Ihrem Server gesetzt ist.

> [!NOTE]
> Das Dokument kann auch verpflichtet sein, zusätzliche browser-spezifische Prüfungen zu bestehen. Beispiele: Zulassungslisten, Blockierungslisten, On-Device-Klassifizierung, Benutzer-Einstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken oder eine Aufforderung des Nutzers zur expliziten Erlaubnis.

## Browser-spezifische Varianten

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Level und Umfang des Drittanbieter-Cookie-Zugriffs erwarten, die sie in verschiedenen Browsern erhalten, da sich deren Speicherzugriffsrichtlinien unterscheiden.

### Chrome

- Auf Cookies muss [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) explizit gesetzt sein, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsberechtigungen laufen nach 30 Tagen ohne Benutzerinteraktion im Browser ab. Interaktion mit dem eingebetteten Inhalt verlängert dieses Limit um weitere 30 Tage. Dies erfolgt nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, weil der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf dem Top-Level-Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut einbettet, erhält der eingebettete Ursprung sofort Drittanbieter-Cookie-Zugriff beim Laden, solange dies innerhalb von 30 Tagen geschieht.
- Die Speicherzugriffsberechtigungen laufen nach 30 Kalendertagen ab.

Die Dokumentation für Firefoxs neue Speicherzugriffspolitik zur Blockierung von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen laufen nach 30 Tagen ohne Benutzerinteraktion im Browser ab. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen.
- Siehe [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert auflöst, der anzeigt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht Inhalten, die in einem Drittanbieter-Kontext (z.B. eingebettet in einem {{htmlelement("iframe")}}) geladen werden, den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zu beantragen; gibt ein {{jsxref("Promise")}} zurück, das auflöst, wenn der Zugriff gewährt wird, und ablehnt, wenn der Zugriff verweigert wird.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagenes Erweiterung zur Storage Access API, die es Top-Level-Sites erlaubt, im Namen eingebetteter Inhalte, die von einer anderen Site im selben [verwandten Websiteset](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen, Drittanbieter-Cookie-Zugriff zu beantragen. Gibt ein {{jsxref("Promise")}} zurück, das auflöst, wenn der Zugriff gewährt wird, und ablehnt, wenn der Zugriff verweigert wird.

> [!NOTE]
> Benutzerinteraktion propagiert sich zu dem von diesen Methoden zurückgegebenen Versprechen, sodass die Anrufer Maßnahmen ergreifen können, die Benutzerinteraktion erfordern, ohne einen zweiten Klick zu benötigen. Ein Anrufer könnte beispielsweise ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, das heißt, für ein anderes gleichartiges Embed. Wenn dies der Fall ist, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name verwendet, um abzufragen, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn dies der Fall ist, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
