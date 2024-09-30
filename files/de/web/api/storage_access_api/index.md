---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Storage Access API")}}

Die Storage Access API bietet eine Möglichkeit für plattformübergreifende Inhalte, die in einem Drittanbieter-Kontext geladen werden (z.B. eingebettet in einem `<iframe>`), auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) zuzugreifen, auf die sie typischerweise nur in einem Erstanbieter-Kontext Zugriff hätten (d.h., wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist für User Agents relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand blockieren, um die Privatsphäre zu verbessern (beispielsweise um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Zustand, die wir auch mit diesen Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele hierfür sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigepräferenzen über verschiedene Websites hinweg.

Die API bietet Methoden, die eingebetteten Ressourcen ermöglichen zu prüfen, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben und, wenn nicht, Zugriffsanfragen an den User Agent zu stellen.

## Konzepte und Nutzung

Browser implementieren mehrere Features und Richtlinien für den Speicherzugriff, die den Zugang zu Drittanbieter-Cookies und unpartitioniertem Zustand einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherraums für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik bezüglich der Blockierung von Drittanbieter-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Grundfunktionalität ist ähnlich. In einem Drittanbieter-Kontext eingebettete plattformübergreifende Ressourcen haben nicht denselben Zugriff auf den Status, den sie hätten, wenn sie in einem Erstanbieter-Kontext geladen würden. Dies geschieht mit guter Absicht — Browser-Anbieter wollen Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele beinhalten, sie weniger offen für das Tracking ihrer Aktivitäten über verschiedene Websites und weniger anfällig für Exploits wie Cross-Site-Request-Forgery ([CSRF](/de/docs/Glossary/CSRF)) zu machen.

Es gibt jedoch legitime Verwendungen für eingebettete plattformübergreifende Inhalte, die Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand benötigen, die durch die eingangs beschriebenen Funktionen und Richtlinien beeinträchtigt werden. Nehmen wir an, Sie haben eine Serie von verschiedenen Websites, die Zugriff auf unterschiedliche Produkte bieten – `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste auf verschiedene Länderdomains zur Lokalisierung aufteilen – `example.com`, `example.ua`, `example.br`, etc. – oder in irgendeiner anderen Weise.

Sie könnten begleitende Nutzwebsites mit Komponenten haben, die in allen anderen Seiten eingebettet sind, zum Beispiel um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Nutzwebsites möchten ihren Status mit den Seiten, in die sie eingebettet sind, über Cookies teilen. Sie können keine Erstanbieter-Cookies teilen, weil sie auf unterschiedlichen Domains liegen, und Drittanbieter-Cookies funktionieren nicht mehr in Browsern, die diese blockieren.

In solchen Situationen ermutigen Website-Betreiber oft Nutzer, ihre Website als Ausnahme hinzuzufügen oder die Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise über alle Websites hinweg erheblich lockern.

Die Storage Access API soll dieses Problem lösen; eingebettete plattformübergreifende Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) auf Basis einzelner Frames uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anfordern. Sie kann auch überprüfen, ob sie bereits Zugriff hat, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

### Unpartitionierte versus partitionierte Cookies

Es ist wichtig zu beachten, dass die Storage Access API nur benötigt wird, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu gewähren. Das bedeutet Cookies, die auf die traditionelle Weise seit dem frühen Web gespeichert werden – alle auf derselben Website gesetzten Cookies werden im selben Cookie-Container gespeichert. Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebetteten Ressourcen unter jeder Top-Level-Site ein einzigartiger Cookiesspeicher zugewiesen wird, wodurch das Verfolgen von Benutzern über diese Cookies über Websites hinweg unmöglich wird.

Browser verfügen über verschiedene Mechanismen zur Partitionierung des Drittanbieter-Cookie-Zugriffs, wie zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Zusammenhang mit der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Eingebettete Inhalte, die einen legitimen Bedarf an Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand haben, können diesen Zugriff mit der Storage Access API wie folgt anfordern:

1. Sie können die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) aufrufen, um zu prüfen, ob sie bereits den benötigten Zugriff haben.
2. Falls nicht, können sie Zugriff über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern.
3. Abhängig vom Browser wird der Nutzer auf verschiedene Weisen gefragt, ob der Zugriff dem anfragenden Embed gewährt werden soll.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Nutzer nur auf, nachdem ein Ursprung auf mehr als einer bestimmten Anzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Aufforderungen für alle eingebetteten Inhalte, die zuvor keinen Speicherzugriff erhalten haben. Der Zugriff wird jedoch automatisch gewährt und Aufforderungen übersprungen, wenn das eingebettete und das einbettende Website im selben [zusammengehörigen Websiteset](/de/docs/Web/API/Storage_Access_API/Related_website_sets) Teil sind.
4. Der Zugriff wird gewährt oder abgelehnt basierend darauf, ob der Inhalt alle Sicherheitsanforderungen erfüllt — siehe [Sicherheitsmaßnahmen](#sicherheitsmaßnahmen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}} basierende Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code zum Behandeln von Erfolgs- und Misserfolgsfällen auszuführen.
   - Modernes Spezifikationsverhalten besagt, dass der Zugriff _pro Frame_ gewährt wird — jedes separate Inhaltsembed hat standardmäßig seinen Drittanbieter-Cookie-Zugriff gesperrt und muss `requestStorageAccess()` aufrufen, um den Zugriff zu aktivieren. Wenn ein Inhaltsembed Zugriff erhalten hat und gleichseitige Embeds dann `requestStorageAccess()` aufrufen, werden ihre Versprechen automatisch erfüllt. Aber sie müssen dennoch aktiviert sein.
   - Die einzige Ausnahme von dem "standardmäßig blockierten" Verhalten besteht, wenn ein Inhaltsembed erfolgreich `requestStorageAccess()` ausführt, sich dann aber eine gleichursprungsige Navigation durchführt (zum Beispiel durch Neuladen von sich selbst). In solchen Fällen wird der Speicherzugriff von der vorherigen Navigation übernommen.
   - In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn ein Embed Drittanbieter-Cookie-Zugriff über `requestStorageAccess()` erhielt, würden alle anderen gleichseitigen Embeds automatisch Zugriff erhalten. Dies war aus Sicherheitsgründen nicht wünschenswert — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbetten würde, um es den Benutzern zu ermöglichen, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufruft, könnten `shop.example.com` und alle anderen darin eingebetteten Sites auf seine Cookies zugreifen, aber auch auf Cookies von `private.users.com`, was nicht zum Einbetten vorgesehen ist. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.
5. Sobald der Zugriff gewährt wird, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<Top-Level-Site, eingebettete Site>` gespeichert. Zum Beispiel, wenn die einbettende Site `embedder.com` ist und das Embed `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`. Gleichseitige Embeds (`docs.example.com`, `profile.example.com`, etc.) könnten dann `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt, wie bereits erwähnt.
   - Ältere Spezifikationsversionen nutzten die spezifischere Berechtigungsschlüsselstruktur `<Top-Level-Site, eingebetteter Ursprung>`, was bedeutete, dass gleichseitige, aber ursprungsübergreifende Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

> [!NOTE]
> In Fällen, in denen eine Top-Level-Site ihre Cookies [partitioniert](#unpartitionierte_versus_partitionierte_cookies) hat, ist die Storage Access API nicht erforderlich, da das Teilen der Cookies standardmäßig kein Datenschutzrisiko darstellt.

## Sicherheitsmaßnahmen

Es gibt mehrere unterschiedliche Sicherheitsmaßnahmen, die dazu führen können, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die folgende Liste, wenn Sie Probleme haben, eine Anforderung zum Laufen zu bringen:

1. Der Aufruf muss mit einer Benutzergeste ([transiente Aktivierung](/de/docs/Glossary/transient_activation)) wie einem Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Nutzer mit übermäßigen Zugriffsanforderungen bombardieren. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Verwendung der API bereits erteilt wurde, z.B. durch eine andere gleichseitige Ressource, die `requestStorageAccess()` aufruft.
   - Der Aufrufer ein Top-Level-Dokument oder gleichseitig zum Top-Level-Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, die nie als Erstanbieter interagiert wurden, haben keinen Begriff von Erstanbieterspeicher. Aus der Sicht des Benutzers haben sie nur eine Drittanbieterbeziehung zu diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Nutzer in einem Erstanbieter-Kontext kürzlich nicht mit dem eingebetteten Inhalt interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) sein.
5. Sandboxed `<iframe>`s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff gewährt werden. Die API fügt daher auch das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzu. Die einbettende Website muss dieses hinzufügen, um Speicherzugriffsanfragen erfolgreich zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um ein Skript für den API-Aufruf und die Ausführung in einem Ursprung, der Cookies/Zustand haben kann, auszuführen:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Verwendung dieser Funktion kann durch eine [Berechtigungen-Richtlinie](/de/docs/Web/HTTP/Permissions_Policy) {{httpheader("Permissions-Policy/storage-access", "storage-access")}} blockiert werden, die auf Ihrem Server gesetzt wurde.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Whitelists, Blacklists, Klassifizierung auf dem Gerät, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Glossary/Clickjacking)-Heuristiken oder das Abfragen des Nutzers um ausdrückliche Berechtigung.

## Browserspezifische Variationen

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Umfang und Ausmaß des Drittanbieter-Cookie-Zugriffs erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von unterschiedlichen Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsberechtigungen werden nach 30 Tagen Browsernutzung ohne Benutzerinteraktion ausgesetzt. Interaktion mit den eingebetteten Inhalten verlängert diese Grenze um weitere 30 Tage. Dies passiert nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den Top-Level-Ursprung `foo.example` erhalten hat, und der Benutzer in weniger als 30 Tagen erneut eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` einbettet, hat der eingebettete Ursprung beim Laden sofortigen Drittanbieter-Cookie-Zugriff.
- Die Speicherzugriffsberechtigungen werden nach Ablauf von 30 Kalendertagen ausgesetzt.

Die Dokumentation zur neuen Speicherzugriffsrichtlinie von Firefox zum Blockieren von Tracker-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) des Umfangs von Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen werden nach 30 Tagen Browsernutzung ohne Benutzerinteraktion aufgehoben. Erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen.
- Siehe [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) für eine Live-Demo.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert angegeben wird, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es, in einem Drittanbieter-Kontext geladene Inhalte (d.h. eingebettet in einem `<iframe>`) den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anzufordern; gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein geplanter Erweiterungsvorschlag der Storage Access API, der es Top-Level-Sites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten von einer anderen Site im selben [zusammengehörigen Websiteset](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktion überträgt sich auf das von diesen Methoden zurückgegebene Versprechen, was es den Aufrufern ermöglicht, Aktionen auszuführen, die Benutzerinteraktion erfordern, ohne einen zweiten Klick erforderlich zu machen. Beispielsweise könnte ein Aufrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen öffnen, ohne den Pop-up-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, d.h., für einen anderen gleichseitigen Embed. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen erfüllt sich automatisch.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der abfragt, ob die Berechtigung zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
