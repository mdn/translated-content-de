---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten Cross-Site-Dokumenten verwendet werden, um zu überprüfen, ob sie Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) haben und, falls nicht, um Zugriff zu bitten. Wir werden uns kurz ein gängiges Szenario des Speicherzugriffs ansehen.

> [!NOTE]
> Wenn wir im Zusammenhang mit der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit [_nicht partitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Drittanbieter-Cookies.

## Nutzungshinweise

Die Storage Access API ist so konzipiert, dass eingebettete Inhalte Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand anfordern können — die meisten modernen Browser blockieren diesen Zugriff standardmäßig, um die Privatsphäre der Nutzer zu schützen. Da eingebettete Inhalte nicht wissen können, wie das Verhalten eines Browsers in dieser Hinsicht sein wird, sollte immer überprüft werden, ob das eingebettete {{htmlelement("iframe")}} über Speicherzugriff verfügt, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf {{domxref("Document.cookie")}}, da Browser häufig ein leeres Cookie-Repository zurückgeben, wenn der Zugriff auf Drittanbieter-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes Cross-Site-{{htmlelement("iframe")}} Drittanbieter-Cookies und nicht partitionierten Zustand unter einer Browserspeicherzugriffspolitik zugreifen kann, die ansonsten den Zugriff darauf blockieren würde.

## Zulassen eines sandboxierten \<iframe>, die API zu nutzen

Zunächst, wenn das `<iframe>` sandboxed ist, muss die einbettende Website dem `sandbox`-Token `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzufügen, um Anfragen der Storage Access API erfolgreich zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, das die API aufruft und es in einem Ursprung ausführt, der Cookies und Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
           allow-scripts
           allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern des Speicherzugriffs

Nun zum Code, der im eingebetteten Dokument ausgeführt wird. In diesem Code:

1. Verwenden wir zuerst Feature Detection (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir dennoch unseren Code aus, der auf Cookies zugreift, und hoffen, dass er funktioniert. Er sollte ohnehin defensiv codiert sein, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet dies, dass dieses {{htmlelement("iframe")}} bereits Zugriff erhalten hat, und wir können unseren Code, der auf Cookies und Zustand zugreift, sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir {{domxref("Permissions.query()")}} auf, um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand bereits gewährt wurde (z.B. an ein anderes Same-Site-Embed). Wir fassen diesen gesamten Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block zusammen, da [einige Browser die `"storage-access"`-Erlaubnis nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was den `query()` Aufruf zum Auslösen bringen kann. Wenn es ausgelöst wird, berichten wir dies an die Konsole und versuchen dennoch, den Cookie-Code auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer Zeit spart, dann können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Nutzerinteraktion auf. Dieser Aufruf kann einen Hinweis für den Benutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Benutzer unsere Anfragen zum Zugriff auf Drittanbieter-Cookies oder nicht partitionierten Zustand abgelehnt und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // ein Cookie setzen
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // einen lokalen Speicherkey setzen
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // Dieser Browser unterstützt die Storage Access API nicht
    // Wir hoffen also, dass wir Zugriff haben!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // Wir haben Zugriff auf Drittanbieter-Cookies, also los geht's
      doThingsWithCookies();
      // Wenn wir nicht partitionierten Zustand ändern möchten, müssen wir einen Handle anfordern.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Überprüfen, ob der Zugang zu Drittanbieter-Cookies
      // für ein anderes Same-Site-Embed gewährt wurde
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // Wenn ja, können Sie requestStorageAccess() ohne Nutzerinteraktion aufrufen,
          // und es wird automatisch aufgelöst.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // requestStorageAccess() nach einer Nutzerinteraktion aufrufen müssen
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // Wenn es einen Fehler beim Erhalten des Speicherzugriffs gibt.
              console.error(`Fehler beim Erhalten des Speicherzugriffs: ${err}.
                            Bitte melden Sie sich an.`);
            }
          });
        } else if (permission.state === "denied") {
          // Benutzer hat den Zugriff auf Drittanbieter-Cookies abgelehnt, also müssen wir
          // etwas anderes tun
        }
      } catch (error) {
        console.log(`Konnte den Berechtigungsstatus nicht abfragen. Fehler: ${error}`);
        doThingsWithCookies(); // Wieder einmal müssen wir hoffen, dass wir Zugriff haben!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()`-Anfragen werden automatisch abgelehnt, wenn die eingebetteten Inhalte nicht gerade eine Benutzeraktion wie ein Tippen oder Klicken ({{Glossary("transient activation")}}) verarbeiten oder wenn die Erlaubnis nicht zuvor bereits erteilt wurde. Wenn die Erlaubnis zuvor nicht erteilt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines auf Benutzeraktionen basierenden Event-Handlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das ausschließlich in Chrome verfügbare [Feature "verwandte Website-Sets"](/de/docs/Web/API/Storage_Access_API/Related_website_sets) kann als ein Mechanismus der progressiven Verbesserung angesehen werden, der zusammen mit der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßig Zugriff auf Drittanbieter-Cookies und nicht partitionierten Zustand zwischen Websites im selben Set. Dies bedeutet, dass Sie nicht den üblichen Workflow zum Abfragen der Benutzererlaubnis durchlaufen müssen, was eine benutzerfreundlichere Erfahrung für Nutzer von Websites im Set bedeutet.

## Anfordern des Speicherzugriffs von der Top-Level-Site im Namen eingebetteter Ressourcen

Die oben beschriebenen Funktionen der Storage Access API ermöglichen es einem eingebetteten Dokument, den Zugriff auf Drittanbieter-Cookies selbst zu beantragen. Es gibt eine zusätzliche experimentelle Methode, {{domxref("Document.requestStorageAccessFor()")}}, eine vorgeschlagene Erweiterung der Storage Access API, die es Top-Level-Sites ermöglicht, im Namen bestimmter verwandter Ursprünge Speicherzugriff zu beantragen.

Die Methode `requestStorageAccessFor()` adressiert Herausforderungen bei der Einführung der Storage Access API auf Top-Level-Sites, die Cross-Site-Bilder oder -Skripte verwenden, die Cookies erfordern. Sie kann den Zugriff auf Drittanbieter-Cookies für direkt in die Top-Level-Site eingebettete Cross-Site-Ressourcen aktivieren, die keinen eigenen Speicherzugriff beantragen können, beispielsweise über {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende Top-Level-Seite als auch die eingebettete Ressource, für die Speicherzugriff angefordert wird, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Eine typische Verwendung von `requestStorageAccessFor()` sieht so aus (diesmal im regulären Promise-Stil statt async/await geschrieben):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Die Erlaubnis wurde bereits erteilt
      // Es ist nicht erforderlich, requestStorageAccessFor() erneut aufzurufen, verwenden Sie einfach Cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Erfordert das Aufrufen von requestStorageAccessFor() nach einer Benutzerinteraktion
      btn.addEventListener("click", () => {
        // Anfordern des Speicherzugriffs
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // Der Benutzer hat den Zugriff auf Drittanbieter-Cookies abgelehnt, also müssen wir
      // etwas anderes tun
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Fehler behandeln
      },
    );
  }
}
```

> [!NOTE]
> Anders als bei `requestStorageAccess()`, prüft Chrome beim Aufruf von `requestStorageAccessFor()` nicht, ob innerhalb der letzten 30 Tage eine Interaktion im Top-Level-Dokument stattgefunden hat, weil sich der Benutzer bereits auf der Seite befindet. Siehe [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanforderungen, die im Namen eines anderen Ursprungs gestellt werden, wird ein anderer Berechtigungsname als für den Rest der Storage Access API verwendet: `"top-level-storage-access"` statt `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob dem Ursprung zuvor die Erlaubnis erteilt wurde oder ob der Cookie-Zugang noch angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir sofort Cookies verwenden; `requestStorageAccessFor()` wurde bereits aufgerufen, sodass es nicht erneut aufgerufen werden muss.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion wie einem Button-Klick aufrufen.

Nachdem die `"top-level-storage-access"`-Erlaubnis erteilt wurde, werden Cross-Site-Anfragen Cookies einschließen, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) einschließen, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und die Ressourcen müssen das `crossorigin="use-credentials"` Attribut beinhalten.

Beispielsweise:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Etwas unternehmen
    });
}
```
